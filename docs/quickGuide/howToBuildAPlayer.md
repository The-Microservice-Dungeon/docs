---
sidebar_position: 4
---

# Player Basics

## What do I need to know to build a Player

:::info

If you are using the skeleton player as an entry point you can jump to step 3.
But for a better understanding I employ you to read all steps.

:::

Following steps are necessary to in participate the game

### 1. The player has to be known to the Game Service

For that you must register your player with the Game Service.

You will be using the REST Call for that:

>**POST**

    http://{defaultHost}/players

>**example request payload**

    {
        "name": "Rigatoni",
        "email": "user@example.com"
    }

If everything works right, as **response** you will get:

    {
        "bearerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "name": "Rigatoni",
        "email": "user@example.com"
    }

The `bearerToken` you will use to sign your commands. It is necessary, so you can only command Robots, that are assign to your player.

If you 'loose' your `bearerToken`, you can get it again with this REST Call:

>**GET**

    http://{defaultHost}/players

>**example response payload**

    {
        "name": "Rigatoni",
        "email": "user@example.com"
    }

This will give you the same response as the POST call.

:::danger
A player can only be register once to the game service. After that you can either use the **GET** call to refetch the `bearerToken` or purge the database to re-register.
If you try to re-register after you already register first, you will get an error massage.
:::

## 2. Join player to game

:::info

At any moment the is only one `active` game. An `active` game is either a game that was created and not started yet, or a running game, which was started.

All other games will be in the status `finished`!

:::

You can only join a game if it was already created, but not yet started.
*The Skeleton Player is listening to the `Game created` **EVENT**, to register a player automatically*

To join a game, you will use a REST Call:

>**PUT**

    http://{defaultHost}/games/{gameId}/players/{playerToken}

The `playerToken` is the `bearertoken` we got earlier.
For the `gameId` please look [here](/quickGuide/gameBasics.md) for **GET** *http://{defaultHost}/games*

Warning you can only join a game once.

## 3. Buy your first robot

Let's assume the game was started, (like it was described here: [Game Basics](/quickGuide/gameBasics.md))

There is a lot happening at once, but we will focus first on a very **minimal approach**:

Your Player must be able to do **TWO** things. The first one is, to know that the game has started and the second one is to send your first `command`.

You could register the player to the Game Service, then to the current game manually with for e.g., Postman. You also could send your first buy command after you started the game yourself with postman for all these actions are REST calls.

But we will look at a bit more automated approach.

### listening to an event

Please get some information on KAFKA Consumer beforehand. A first help could be the example of the [generic-player.GameEventConsumerService](https://github.com/The-Microservice-Dungeon/generic-player/blob/main/src/main/java/thkoeln/dungeon/eventconsumer/game/GameEventConsumerService.java)

Let's assume your player has joined the game and at one point the game starts.

The Game Service will produce an event for the changing game status.

The channel you want to listen to is `status`. The event will have a **header**:

    {
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "transactionId": "0cfc04f1-6df5-42c6-a19a-146128b8a3b4",
    "version": 42,
    "timestamp": {},
    "type": "event-example-uploaded"
    }

and a **payload**:

    {
    "gameId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "status": "created"
    }

Your player should have saved the gameId at some point, probably best before joining a game. By for example comparing the gameId to the already saved one, you could be certain that the game you joined started and not another one.

Secondly this could activate the consumer for the `round events`. We learned a round has an *command collection phase* and a *command execution phase*.

When a *command collection phase* starts there will be such an event in the channel `roundStatus`

>**header**

    {
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "transactionId": "0cfc04f1-6df5-42c6-a19a-146128b8a3b4",
    "version": 42,
    "timestamp": {},
    "type": "event-example-uploaded"
    }

>**payload**

    {
    "gameId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "roundId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "roundNumber": 0,
    "roundStatus": "started"
    }

Again, you can reconfirm if the round belongs to you game.

### Sending BUY command

After that your player should issue the following `buy command` via REST call to the game service. The important part here is that the `roundStatus` must be **started**. If it has another status, it is not the time to issue commands.

>**POST**

    http://{defaultHost}/commands

>**example request payload**

    {

    "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "playerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "robotId": "",
    "commandType": "buying",
    "commandObject": 

        {
            "commandType": "buying",
            "planetId": "",
            "targetId": "",
            "itemName": "ROBOT",
            "itemQuantity": 1
        }

    }

As a Response you will get a `transactionId`, which you have to save.

>**example response payload**

    {
    "transactionId": "d290f1ee-6c54-4b01-90e6-d701748f0851"
    }

Why do I need to save the `transactionId`? After the collection of all commands the game service will execute the commands in order of the game loop. for the execution the game service is sending these commands to the executing service, in our case to the trading service. The trading service will execute the command and buy that generate a robot which belongs to your player.

After creating that robot, the trading service issues an event. You can filter out that event from the Kafka channel `trades` by using the `transactionId` you saved earlier. The payload of that event will include the `robotId` you need to issue a movement command.

>**example header**

    {
    "type": "buy-robot",
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "transactionId": "d290f1ee-6c54-4b01-90e6-d701748f0851"
    "version": 42,
    "timestamp": "2020-01-10T12:00:00Z"
    }

>**example payload**

    {
    "success": true,
    "moneyChangedBy": -500,
    "message": "robot bought",
    "data": [
        {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "player": "ae2cfcf0-e870-4360-a41e-3b3bb3312234",
        "planet": "2faf337d-d8d1-40fc-983e-5f130540496b",
        "alive": true,
        "maxHealth": 100,
        "maxEnergy": 60,
        "energyRegen": 8,
        "attackDamage": 5,
        "miningSpeed": 10,
        "health": 75,
        "energy": 43,
        "healthLevel": 5,
        "damageLevel": 5,
        "miningSpeedLevel": 5,
        "miningLevel": 5,
        "energyLevel": 5,
        "energyRegenLevel": 5,
        "storageLevel": 5,
        "inventory": {
            "maxStorage": 20,
            "usedStorage": 5,
            "storedCoal": 3,
            "storedIron": 2,
            "storedGem": 0,
            "storedGold": 0,
            "storedPlatin": 0
        },
        "items": {
            "rocket": 0,
            "wormhole": 2,
            "longRangeBombardement": 0,
            "selfDestruction": 1,
            "repairSwarm": 0,
            "nuke": 3
        }
        }
    ]
    }

## 4. Move robot to another planet

After you saved the *"id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"* for your robot you now can move it.

In the following round, which you can identify by the above described round started event, you know could move your robot, but where to?
**The Problem** is you don’t really know where you are and where to move the robot.

Additionally to a successful executed `buy robot event`, you will have to build a consumer for the robot service `neighbours` Kafka channel. In the best case you should be able to consume the event, which you can identify by your `transactionId`. The payload will tell you the `uuid` for neighbouring planets.

>**example header**

    {
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "transactionId": "0cfc04f1-6df5-42c6-a19a-146128b8a3b4",
    "version": 42,
    "timestamp": {},
    "type": "event-example-uploaded"
    }

>**example payload**

    {
    "neighbours": [
        {
        "planetId": "5e7773ed-265a-4e7b-bece-86392407afef",
        "movementDifficulty": 0,
        "direction": "NORTH"
        }
    ]
    }

With one of the `planetId` you should have a destination for your move robot command. Or you could use the `planet` from the robot creation event for a REST call to the Map Service.

>**GET**

    http://{defaultHost}/planets/{planet_id}

>**example response payload**

    {

    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "movement_difficulty": 0,
    "recharge_multiplicator": 0,
    "gameworld_id": "5bd7c16e-97a9-49f5-974e-307be5fc576d",
    "planet_type": "default",
    "neighbours": 

    [

    {
        "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397",
        "movement_difficulty": 0,
        "direction": "north"
    }

    ],
    "created_at": "2019-08-24T14:15:22Z",
    "updated_at": "2019-08-24T14:15:22Z",
    "resource": 

    {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397",
        "max_amount": 0,
        "current_amount": 0,
        "created_at": "2019-08-24T14:15:22Z",
        "updated_at": "2019-08-24T14:15:22Z",
        "resource_type": "coal"
    }

    }

Here you could also get a neighbour’s planet for your move command ;).

Now your player should issue a REST Call to the Game Service.
Beware now you must fill in `robotId`, and `planetId`. The difference between `planetId` or `targetId` is that `targetId` is targeting robots and `planetId` is targeting the planet tile of the map.

>**POST**

    http://{defaultHost}/commands

>**example request payload**

    {

    "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "playerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "robotId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "commandType": "moving",
    "commandObject": 

        {
            "commandType": "moving",
            "planetId": "5e7773ed-265a-4e7b-bece-86392407afef",
            "targetId": "",
            "itemName": "",
            "itemQuantity": 0
        }

    }

With that you should again have received an `trasactionId`, that will help you to identify the success or failure of your command.

## 5. Playing and Winning

From here on out you are on your one. You get a gold star.

___

## What's next?

Deep Dive [Commands](/game/commands.md).

How does the [world/map](/dungeon.md) what else do i need to now to play?

What can I do with my [robot](/robotEntry.md)?

What is the [economy](/trading/economy.md) and what [items](/trading/tradeables.md) can i buy?


