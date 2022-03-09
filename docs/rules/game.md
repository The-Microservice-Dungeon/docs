---
sidebar_position: 7
---

# Game Service Technical View

## Commands

The game service must manage the commands from the player, because it owns the information about the round timer and can send the commands at the right time to the right services.

It ownes a list of all robots, to verify, that players dont sent commands for robots of other players.

The list is created by the information of the robot-create-events, so the service knows all the robots, that are owned by the players.

The commands from the players are stored in the game service and are sent to the other services, that fit the command-type during the execution phase.

The players recieves an id, to find the right event, that informs him of the outcome of his command.

## Round Flow Events

* Game Created
* Player name joined the game.
* Game started

* Round x started
* Phase: Command Input started
* Phase: Command Input ended
* Phase: Command execution started

* Command execution Phase: Blocking started
* Command execution Phase: Blocking ended
* Command execution Phase: Trading started
* Command execution Phase: Trading ended
* Command execution Phase: Movement started
* Command execution Phase: Movement ended
* Command execution Phase: Battle started
* Command execution Phase: Battle ended
* Command execution Phase: Mining started
* Command execution Phase: Mining ended
* Phase: Command execution ended
* Round x ended

* Game ended

## Gameloop

Items are handled seperantly, to make it easier forthe other services.
The original gameloop was changed from 1. Blocking -> 2. Trading -> 3. Moving -> 4. Fighting -> 5. Mining -> 6. Scouting to

    1. Blocking -> 2. Trading -> 3. Moving (with an item) -> 4.Moving (without an item) -> 5. Repairing -> 6. Battleing (with an item) -> 7. Battleing(without an item) -> 8. Mining -> 9. Regenerating

## Notes to Gameplay

* Chosen option: Generic command entity owned by Game, payload owned by services to whom command is routed.

* Game Service receives commands from the players and is responsible for sorting them by their execution phase

* Game Service sends a package with commands to the associated service during the correct phase, the other service executes the commands directly after receiving it (other services have no awareness about phases).

* Commands are associated with a commandUUID, this UUID allows the player to access the result of their command after it has been executed
