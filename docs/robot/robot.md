---
sidebar_position: 1
---

# Robot Service Technical View

## Robot and its Information

The robot has several variables that you have to keep an eye out for.

You can the information for your robot by using this REST call:

>**GET**

        http://{defaultHost}/robots/{robot-uuid}

>**Response Payload Example**

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
        "inventory": 

    {

        "maxStorage": 20,
        "usedStorage": 5,
        "coal": 3,
        "iron": 2,
        "gem": 0,
        "gold": 0,
        "platin": 0

    },
    "items": 

        {
            "rocket": 0,
            "wormhole": 2,
            "longRangeBombardement": 0,
            "selfDestruction": 1,
            "repairSwarm": 0,
            "nuke": 3
        }

    }

* Here you can find the REST Controller (https://github.com/The-Microservice-Dungeon/robot/blob/main/src/main/kotlin/com/msd/robot/application/RobotController.kt)

* Here is the robot damain overview: (https://github.com/The-Microservice-Dungeon/robot/blob/main/src/main/kotlin/com/msd/robot/domain/Robot.kt)

* general: id, player, planet, alive(y/n) -> These are self-explanatory.

* max stats of robot according to current upgrade status: maxHealth, maxEnergy, energyRegen, attackDamage, miningSpeed -> These are variables that can be improved by upgrades bought by the trading service.

* current status of the robot: health, energy -> your current pool of helath and energy. A Robot is not dying with "0" Energy. You simply cannot use another action exept of `regenerating`.

* current upgrade level: healthLevel, damageLevel, miningSpeedLevel, miningLevel, energyLevel, energyRegenLevel, storageLevel -> you can only upgrade to the next level via trading service.

* object “inventory” with attributes: maxStorage, usedStorage, storedCoal, storedIron, storedGem, storedGold, storedPlatin (https://github.com/The-Microservice-Dungeon/robot/blob/main/src/main/kotlin/com/msd/robot/domain/Inventory.kt)

## Spawning a Robot

* The spawn of the robot is a direct result of a "Buy robot comand" to the trading service

* If a player has enough money the trading service uses a REST call to the robot service.

The expected properties are:

* transaction_id
* player
* planet

All expected properties are UUIDs. The robot service then creates the new robot with a newly generated uuid for the robot, the three received properties and standard values.

>**POST**

    http://{defaultHost}/robots

>**example payload**

    {

        "transactionId": "75906707-8c31-479c-b354-aa805c4cefbc",
        "player": "ae2cfcf0-e870-4360-a41e-3b3bb3312234",
        "planets": 

        [
            "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        ],
        "quantity": 1

    }

* The player listens to the robot chanell: **spawn-notification** and recives and can match the `transactionId` in the event header, which he recived for the command to the event.

>**Event Payload**

    {
    "robotId": "7c659da1-3329-4978-8838-9ba0c468720c",
    "playerId": "35184259-d156-4290-94ed-3a4b4f2c36f8",
    "otherSeeableRobots": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ]
    }

* In addition there will be an event in the channel **neighbours**, wich tells you all the neighboring planets for the new robot, to wich you could move the new bought robot.

>**Event Payload**

    {
    "neighbours": [
        {
        "planetId": "5e7773ed-265a-4e7b-bece-86392407afef",
        "movementDifficulty": 0,
        "direction": "NORTH"
        }
    ]
    }

## Upgrade transaction

* game service: issues the command which was received by the player to the trading service
* trading service: processes the command, checks if position is a spacestation, checks if player has enough money, sends request to robot, receives answer from robot, adjusts wallet of player and throws success or failure event. The trading service is using a REST call to the robot service for this.

>**POST**

        http://{defaultHost}/robots/{robot-uuid}/upgrades

>**Example Payload**

    {

        "transactionId": "75906707-8c31-479c-b354-aa805c4cefbc",
        "upgradeType": "STORAGE",
        "targetLevel": 1

    }

* robot service: validate robot position and do the upgrade (answer is success or failure)

* After that the trading services is trowing an event, which the player has to conusme to be informed abeout succes or failure of his command. This is seen as a `trade` by the trading service. [Trading Service Deep Dive](/tradingIntro.md)

The robot service only has to validate the position of the given robot and check if the bought upgrade is possible.

Upgrade Status: robot receives the data from trading if upgrades are bought, stores this and tracks the multiplier (which is dependant on the total bought upgrades for each robot)

## Additional usefull REST calls

The next REST call can be used to get all robots.For example to check if the robot is belonging to the specific player, or to evaluete how many robots a player has.

>**GET**

        http://{defaultHost}/robots

The trading service uses, in addition to the above written, theses REST calls to the robot service, to communicate trading command transactions. Again the Trading Service is throwing the events that can be interpreted by the player.

* Instead of using the regenerate action of the robot you could buy a full health or energy regeneration from a spacestation.
This is communicated by the trading service in the following way.

>**POST**

        http://{defaultHost}/robots/{robot-uuid}/instant-restore

>**Example Payload**

    {

        "transactionId": "75906707-8c31-479c-b354-aa805c4cefbc",
        "restorationType": "HEALTH"

    }

* Items bought by a Robot are behaving the same way as a bought upgrade.

>**POST**

        http://{defaultHost}/robots/{robot-uuid}/inventory/items

>**Example Payload**

    {

    "transactionId": "75906707-8c31-479c-b354-aa805c4cefbc",
    "itemType": "ROCKET"

    }

* Also if a trading command is to sell resorces. All resources present in a robot inventory are sold.

>**POST**

        http://{defaultHost}/robots/{robot-uuid}/inventory/clear-resources

>**Example Payload**

    {

    "coal": 3,
    "iron": 2,
    "gem": 0,
    "gold": 0,
    "platin": 0

    }

* Also there is a way to change the global variables for all robots, for example to make movement regagrles of the movement difficulty of the map scale with an additional factor.

>**PATCH**

        http://{defaultHost}/gameplay-variables

>**Example Requst Payload**

    {

        "storage": 

    {

        "lvl0": 20,
        "lvl1": 50,
        "lvl2": 100,
        "lvl3": 200,
        "lvl4": 400,
        "lvl5": 1000

    },
    "hp": 
    {

        "lvl0": 10,
        "lvl1": 25,
        "lvl2": 50,
        "lvl3": 100,
        "lvl4": 200,
        "lvl5": 500

    },
    "damage": 
    {

        "lvl0": 1,
        "lvl1": 2,
        "lvl2": 5,
        "lvl3": 10,
        "lvl4": 20,
        "lvl5": 50

    },
    "miningSpeed": 
    {

        "lvl0": 2,
        "lvl1": 5,
        "lvl2": 10,
        "lvl3": 15,
        "lvl4": 20,
        "lvl5": 40

    },
    "energyCapacity": 
    {

        "lvl0": 20,
        "lvl1": 30,
        "lvl2": 40,
        "lvl3": 60,
        "lvl4": 100,
        "lvl5": 200

    },
    "energyRegeneration": 
    {

        "lvl0": 4,
        "lvl1": 6,
        "lvl2": 8,
        "lvl3": 10,
        "lvl4": 15,
        "lvl5": 20

    },
    "energyCostCalculation": 

        {
            "blockingBaseCost": 2,
            "blockingMaxEnergyProportion": 10,
            "miningMultiplier": 1,
            "miningWeight": 1,
            "movementMultiplier": 1,
            "attackingMultiplier": 1,
            "attackingWeight": 1
        }

    }

* energyCostCalculation defines the parameters for energy cost calculations. The formulas are as follows:

* Blocking: blockingBaseCost + blockingMaxEnergyProportion * energyCapacity

* Mining: miningMultiplier * (mining_strength_level + miningWeight)

* Movement: movementMultiplier * movement_difficulty

* Attacking: attackingMultiplier *(damage_level + attackingWeight)

## Usefull Events by Robot

Everyone should keep the channel: **robot-destroyed** in mind.
This channel is the only way to find out if your robot has been destroyed.

So you should monitor this channel for your `robotId's`.

>**Event Payload Example**

    {
    "robotId": "7c659da1-3329-4978-8838-9ba0c468720c",
    "playerId": "35184259-d156-4290-94ed-3a4b4f2c36f8"
    }

Other Events are all in connection with actions. You can see examples [here](/robot/robotActions.md)

## Repository Link Robot

[Repository Link Robot](https://github.com/The-Microservice-Dungeon/robot/tree/main/src/main/kotlin/com/msd)
