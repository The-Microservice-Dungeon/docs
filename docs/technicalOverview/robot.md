---
sidebar_position: 3
---

# Robot Service

## Blocking sequence

* game service: issues the command which was received by the player
* robot service: processes the command and throws event according to the result

No other service needs to know whether a planet is blocked or not so this information is managed within the robot context exclusively.

## Fighting Sequence

* game service: issues the command which was received by the player
* robot service: processes the command and throws event according to the result

The event which is thrown as a result of the fighting sequence is puplic available information, as long as someone knows the robot uuid he can listen and use the gathered information.
Hiding the result behind a command uuid will obfuscate the information but results in problems for getting the needed information to the owner of the attacked robot (he doesn't know the command uuid and never will at the current draft of the command structure)

## Item usage sequence

* game service: issues the command which was received by the player
* robot service: processes the command, determines a random planet and throws events according to the result
* map service: provides a list of all planets

### Fighting item

The received item type determines if a robot uuid or a planet uuid is expected. E.g. robot uuid for the targeted rocket and planet uuid for the nuke.
Repair item

The received item type determines if a robot uuid or a planet uuid is expected. E.g. robot uuid for a single repair and planet uuid for the repair swarm.
Movement item (wormhole)

The robot service requests a list of all planets from the map service and chooses a random one. The location of the robot is changes accordingly and a success event is thrown. Additionaly, the two events after a successful movement (refer to Robot movement sequence) are also thrown.

## Mining sequence

* game service: issues the command which was received by the player
* robot service: processes the command, issues requests to map, processes the results and throws event according to the result
* map service: handles the amount of available resources

All mining requests are received as a package from the game service and processed together. To determine if the requests are valid and the corresponding robot has the ability to mine the resource on its location, the robot service first requests the type of the resource from the map service.
The robot service then combines all valid requests for one planet and sends a mining request with the total amount per planet to the map service. Map then returns the amount which can be mined (requested value or below) and robot then distributes the received resources fairly between all participating robots for the planet.

## Movement sequence

* game service: issues the command which was received by the player
* robot service: processes the command, issues request to map, checks if two planets are neighbors, processes the results and throws event according to the result
* map service: provides neighbors of a planet

A successful result of the move has to incluse all planet data of the new position. This info has to be obfuscated so that not every player can just read the most recent planet data of all visited planets. Therefore the planet info has to be obfuscated via the command uuid.
After a successful movement two events are thrown. The first one which indicates the success of the movement. It contains the remaining energy of the robot, the planet data of the target planet and the uuids of all robots located there. The second event is mapped to the command uuid and provides all neighbors for the target planet after a successful move.
If a player tries to move a robot which is on a blocked planet, the robot service will just throw an event to report the failure and that round is lost for that specific robot.

## Regeneration sequence

* game service: issues the command which was received by the player
* robot service: processes the command and throws event according to the result

Special case "regenerate twice the amount of energy on own spawn point" is probably out of scope because the robot service does not know the initial spawn location of the player - maybe there isn't one at all (game init: player has to buy his first robot and therefore has no designated personal spawn)

## Upgrade sequence

* game service: issues the command which was received by the player to the trading service
* trading service: processes the command, checks if position is a spacestation, checks if player has enough money, sends request to robot, receives answer from robot, adjusts wallet of player and throws success or failure event
* robot service: validate robot position and do the upgrade (answer is success or failure)

The trading service has to handle the communication with the game service and has to throw the events which report the results.
The robot service only has to validate the position of the given robot and check if the bought upgrade is possible. If yes: do the upgrade and answer with success to the trading service and if no, answers with report of failure. The rest is handled by the trading service.

Upgrade Status: robot receives the data from trading if upgrades are bought, stores this and tracks the multiplier (which is dependant on the total bought upgrades for each robot)

## Robot and its data

The API provides GET for all attributes of a robot:

* general: id, player, planet, alive
* max stats of robot according to current upgrade status: maxHealth, maxEnergy, energyRegen, attackDamage, miningSpeed
* current status of the robot: health, energy
* current upgrade level: healthLevel, damageLevel, miningSpeedLevel, miningLevel, energyLevel, energyRegenLevel, storageLevel
* object “inventory” with attributes: maxStorage, usedStorage, storedCoal, storedIron, storedGem, storedGold, storedPlatin

### POST a robot

This is responsible for spawning a new robot. It should only be used by the trading service.

The expected properties are:

* transaction_id
* player
* planet

All expected properties are UUIDs. The robot service then creates the new robot with a newly generated uuid for the robot, the three received properties and standard values.

### PATCH robot data

This is the way to go if the game service converts commands to API calls and controls the actions. May be subject to chance depending on whether we get the respective command directly or reformed as API call.

Is used to change attributes of a specific robot. Used for trading, upgrading, mining, movement.
Expected properties are:

* For movement: planet uuid

* For upgrading: healthLevel, damageLevel, miningSpeedLevel, miningLevel, energyLevel, energyRegenLevel, storageLevel as integer

* For mining and trading: storedCoal, storedIron, storedGem, storedGold, storedPlatin

## Commands

The path “/commands” is a endpoint to receive commands which are no specific API calls. These are all commands which the player issues to the game service which then will be forwarded to us together with a transaction id. They are received as a batch consisting of all commands of a phase.
Valid commands are:

    block
    move
    fight
    mine
    regenerate
    use-item-fighting
    use-item-movement
