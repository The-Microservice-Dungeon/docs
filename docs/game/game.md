---
sidebar_position: 1
---

# Game Loop

Items are handled seperantly, to make it easier forthe other services.
The Item use is always befor the normal corresponding action.
The current phases of the execution part of a round are these(for more information look in the technical views of [robot](/robot.md) and [trading](/trading/tradingService.md)):

    1. Blocking 
    2. Trading
    3. Moving (with an item)
    4.Moving (without an item)
    5. Repairing
    6. Battleing (with an item)
    7. Battleing(without an item)
    8. Mining
    9. Regenerating

## Events

### Before a game

Before the start of a game there are these three events.

* Game Created

* Player "name" joined the game. (optional, if no player joins then this event is not produced)

* Game started

### During a game

In the gameplay there is a loop of repeating events:

* Round x started (With round x started event  automatically beginns the command collection phase, where all the player send theri commands to the game service)

* Command Input ended. (after this event the game service is ditributing the commands as packeges to the oter services for every posiple command type in the correct phase order. The services executes the commands directly after receiving it. The other services have no awareness about phases. The resolution of all commands can be traced byserching the in the response of the command REST call recived `transactionId`)

* Round x ended.(After this event a new round will start. Here you can adjust your strategy, after reciving all responses to all actions )

### Game ending

The final event is:

* Game ended(with this event a game ends. No commands can be issued anymore. Gamelog service schould provide a scoreboard and trophies. When a new game starts, you have to join it again to play.)

## Cheat Sheet

![Game Timeline](/img/gameTimeline.png)
