---
sidebar_position: 2
---

# Robot Actions

## Commands

:::info

Not all action related events are presented here with an actual example, because they work in the same manner.
For the mising Events please refer to the [ASYNC API](/asyncapi/robot)

:::

The path **POST** “/commands” is a endpoint to receive commands which are no specific API calls. These are all commands which the player issues to the game service which then will be forwarded to the robot service together with a transaction id. They are received as a batch consisting of all commands of a phase.

For a deep dive refer to [Commands](/game/commands.md).

### Valid command types for robot

    block
    move
    fight
    mine
    regenerate
    use-item-fighting
    use-item-movement

## Actions

Every action of a robot is done in the corresponding round phase (refer to [game loop](/game/game.md)). Most of the actions will require energy. If there is not enought energy left in the robot an action will fail.

### Blocking action

* game service: issues the command which was received by the player
* robot service: processes the command and throws event in the channel **planet-blocked** according to the result.

>**Event Payload**

    {
    "success": true,
    "message": "Planet successfully blocked/Not enough energy",
    "planetId": "5e7773ed-265a-4e7b-bece-86392407afef",
    "remainingEnergy": 10
    }

* If another robot tries to move out of a blocked planet, the robot service will notify it that the movement was not possible. The robot service will check before the movement of a robot if it stands on a blocked planet.

No other service needs to know whether a planet is blocked or not so this information is managed within the robot context exclusively.

### Movement action

* game service: issues the command which was received by the player
* robot service: processes the command, issues request to map, checks if two planets are neighbors, processes the results and throws event according to the result
* map service: provides neighbors of a planet

A successful result of the move has to incluse all planet data of the new position. This info has to be obfuscated so that not every player can just read the most recent planet data of all visited planets. Therefore the planet info has to be obfuscated via the command uuid.
After a successful movement two events are thrown. The first one which indicates the success of the movement. It contains the remaining energy of the robot, the planet data of the target planet and the uuids of all robots located there. The second event is mapped to the command uuid and provides all neighbors for the target planet after a successful move.
If a player tries to move a robot which is on a blocked planet, the robot service will just throw an event to report the failure and that round is lost for that specific robot.

### Item usage action

* game service: issues the command which was received by the player
* robot service: processes the command, and throws events according to the result
* special case movement item: robot determines a random planet for which the map service: provides a list of all planets

(https://github.com/The-Microservice-Dungeon/robot/tree/main/src/main/kotlin/com/msd/item/domain)

#### Fighting item

The received item type determines if a robot uuid or a planet uuid is expected. E.g. robot uuid for the targeted rocket and planet uuid for the nuke.

#### Repair item

The received item type determines if a robot uuid or a planet uuid is expected. E.g. robot uuid for a single repair and planet uuid for the repair swarm.

#### Movement item (wormhole)

The robot service requests a list of all planets from the map service and chooses a random one. The location of the robot is changes accordingly and a success event is thrown. Additionaly, the two events after a successful movement (refer to Robot movement sequence) are also thrown.

### Fighting action

* game service: issues the command which was received by the player

* robot service: processes the command and throws event in the channel **fighting** according to the result.

>**Event Payload**

    {
    "success": true,
    "message": "Attacking successful/Target not found",
    "attacker": "afcf1d7a-29fc-47b4-8832-265a3473f8d8",
    "defender": "3f6ad423-cc3c-4d3f-89cb-bdf0badfd437",
    "remainingDefenderHealth": 0,
    "remainingEnergy": 10
    }

The event which is thrown as a result of the fighting sequence is puplic available information, as long as someone knows the robot uuid he can listen and use the gathered information.

Also in the channel **resource-distribution** you can see how much resources your robot gets, if you destroy an enemy robot. Recources are distributed equaly between all robots present at the planet of the destroyed robot at the moment of its death. If there is no place in the inventory, recources are distributed equaly between all robots with empty inventory. If there are more recourses than inventoryspaces, the resources are lost to the cold cosmos.

### Mining action

* game service: issues the command which was received by the player
* robot service: processes the command, issues requests to map, processes the results and throws event according to the result
* map service: handles the amount of available resources

All mining requests are received as a package from the game service and processed together. To determine if the requests are valid and the corresponding robot has the ability to mine the resource on its location, the robot service first requests the type of the resource from the map service.
The robot service then combines all valid requests for one planet and sends a mining request with the total amount per planet to the map service. Map then returns the amount which can be mined (requested value or below) and robot then distributes the received resources fairly between all participating robots for the planet.

### Regeneration action

* game service: issues the command which was received by the player
* robot service: processes the command and throws event according to the result

Be carefull not to mix up with the regenerating, you can buy wit a command to the trading service. This action does not require energy to be used.

## Links to Robot Command Repository

* (https://github.com/The-Microservice-Dungeon/robot/blob/main/src/main/kotlin/com/msd/command/application/CommandApplicationService.kt)

* (https://github.com/The-Microservice-Dungeon/robot/blob/main/src/main/kotlin/com/msd/command/application/CommandController.kt)

* (https://github.com/The-Microservice-Dungeon/robot/blob/main/src/main/kotlin/com/msd/robot/application/RobotApplicationService.kt)