---
id: trading_entry
sidebar_position: 1
---

# Trading Service Technical View

## Lifecycle Technical information

The processes of the trading service are always based on a user command. This is sent by the player to the game service and from there to the trading service. The trading Service controls the money-relevant information. The service also checks whether the request was made from a valid position (space station). Then, in the case of robot-relevant trades, a single request is sent to the robot service to check whether it meets all the necessary requirements for the trade. If this is the case, the trading service receives a positive response to its request to the robot service, withdraws the money and throws an event with the transactionId associated with the trade, so that the player knows what happened with the trade. In the event of a transaction failure, an event is also thrown to inform the player of the error.

## Player and Money

Trading saves a `Player`. The playerId is known, by listening to the Player registered event of the game service:

    {
    "playerId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "name": "string"
    }

Trading is also the only service which saves the money of the registered `Player` as an attribute Money which is a numeric value.

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/player/PlayerRestController.java)

## Spawns and Spacestations

Even if the trading service is not the owner of the space stations, their positions on the map are still needed and so saved to match the robot position with the positions of the space stations in case of a request to the trading service. For example, if a robot wants to sell resources, but is not located on space station. The data initially comes from the map service which has to emit them as an event for every space station:

{
  "planet_id": "fe9732a9-b905-4934-8835-ed5a93494397"
}

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/station/StationService.java)

## Trading Places

* `PLAYER` can buy `SPECIAL ITEM` and `UPGRADES` with a `ROBOT` at `SPACESTATION`

* `PLAYER` can buy `ROBOTS` **EVERYWHERE** which spawns at a random `SPACESTATION`

* `RESOURCE` can be sold at any `SPACESTATION`

## Trading Semantics

### Commands

For a deep dive on commands please look here: [Commands](/game/commands.md)

    {
    "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "playerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "robotId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "commandType": "blocking",
    "commandObject": 
        {
        "commandType": "blocking",
        "planetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "targetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "itemName": "string",
        "itemQuantity": 5
        }
    }

* (https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/controller/CommandController.kt)
* (https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/domain/Command.kt)
* (https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/domain/CommandPayload.kt)

## Rest calls for player

* For the `player` there are **no relevant** REST calls to the trading service

## Events for player

### bank-created

This event is produced when a player bank account is initialized:

Channel: **bank-created**

    {
    "playerId": "35184259-d156-4290-94ed-3a4b4f2c36f8",
    "money": 0
    }

### current-item-prices

At the beginning of each round the new item buy-prices are announced

Channel: **current-item-prices**

    [
    {
        "name": "string", <- Item name
        "price": 0
    }
    ]

### current-resource-prices

At the beginning of each round the new sell-resources prices are announced

Channel: **current-resource-prices**

    [
        {
        "name": "string",
        "price": 0
        }
    ]

### Trades

The event which indicates what happened to the trade. It also contains additional data about the result of the trade in data. For example, if a robot was bought, data contains the new robot object.

Channel: **trades**

#### Headers

There are four kinds of `headers`:

>**buy-error**

    {
    "type": "buy-error",
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "version": 42,
    "timestamp": "2020-01-10T12:00:00Z"
    }

>**buy-robot**

    {
    "type": "buy-robot",
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "version": 42,
    "timestamp": "2020-01-10T12:00:00Z"
    }

>**buy-item**

    {
    "type": "buy-item",
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "version": 42,
    "timestamp": "2020-01-10T12:00:00Z"
    }

>**sell-resource**

    {
    "type": "sell-resource",
    "eventId": "5bc9f935-32f1-4d7b-a90c-ff0e6e34125a",
    "version": 42,
    "timestamp": "2020-01-10T12:00:00Z"
    }

#### Payloads

>**failed transaction**

    {
    "success": false,
    "moneyChangedBy": 0,
    "message": "not enough money",
    "data": null
    }
>**bought-robot**

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

>**bought item**

    {
    "success": true,
    "moneyChangedBy": -100,
    "message": "item bought",
    "data": null
    }

>**sold resources**

    {
    "success": true,
    "moneyChangedBy": 1337,
    "message": "resources sold",
    "data": {
        "coal": 3,
        "iron": 2,
        "gem": 0,
        "gold": 0,
        "platin": 0
    }
    }

## Rest for other services

The trading service is receiving the `commands` from the game service via REST call.

> **POST**

        http://{defaultHost}/commands

>**example payload**

    [
        {
        "transactionId": "transactionId",
        "playerId": "playerId",
        "payload": 

            {
                "commandType": "buy",
                "amount": "5",
                "itemName": "ROBOT"
            }
        }

    ]

The gameLog service is using a get command to receive the current balances of the `players` bank accounts.

For the current round:

> **GET**

        http://{defaultHost}/balances

>**example payload**

    [

        {
            "playerId": "35184259-d156-4290-94ed-3a4b4f2c36f8",
            "balance": 30002
        }

    ]

Or for a specific round

> **GET**

        http://{defaultHost}/balances/{round-number}

>**example payload**

    [

        {
            "round": 0,
            "playerId": "35184259-d156-4290-94ed-3a4b4f2c36f8",
            "balance": 30002
        }

    ]


