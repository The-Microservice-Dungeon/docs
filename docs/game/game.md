---
sidebar_position: 1
---

# Game Loop

Items are handled separately, to make it easier for the other services.
The Item use is always before the normal corresponding action.
The current phases of the execution part of a round are these(for more information look in the technical views of [robot](/robotEntry.md) and [trading](/trading/tradingService.md)):

    1. Blocking 
    2. Trading
    3. Moving (with an item)
    4. Moving (without an item)
    5. Repairing
    6. Battleing (with an item)
    7. Battleing(without an item)
    8. Mining
    9. Regenerating

## Events

### Before a game

Before the start of a game there are these three game service related events.

* Game Created

* Player "name" joined the game. (optional, if no player joins then this event is not produced)

* *Excursus:* The game world is created through a REST call to the [map service](/map.md). The game world is automatically sized to the created game maximal player and round amount.

>**POST**

    http://{defaultHost}/gameworlds

>**example request payload**

    {
    "gameworld": {
        "player_amount": 100,
        "round_amount": 1000
    }
    }

* The map service is producing an event for the created game world in the channel **gameworld-created**

>**example event payload**

{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "spacestation_ids": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "status": "active"
}

* Game started

### During a game

In the gameplay there is a loop of repeating events:

* Round x started (With round x started event automatically begins the command collection phase, where all the players send their commands to the game service)

* Command Input ended. (after this event the game service is distributing the commands as packages to the other services for every possible command type in the correct phase order. The services execute the commands directly after receiving it. The other services have no awareness about phases. The resolution of all commands can be traced by searching the in the response of the command REST call received `transactionId`)

* Round x ended.(After this event a new round will start. Here you can adjust your strategy, after receiving all responses to all actions )

### Game ending

The final event is:

* Game ended(with this event a game ends. No commands can be issued anymore. GameLog service should provide a scoreboard and trophies. When a new game starts, you have to join it again to play.)

## Cheat Sheet

![Game Timeline](/img/gameTimeline.png)

## Repository Link Game

[Repository Link Game](https://github.com/The-Microservice-Dungeon/game/tree/main/src/main/kotlin/microservice/dungeon/game/aggregates)


