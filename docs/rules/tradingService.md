---
sidebar_position: 5
---

# Trading Service Technical View

## Price Econonmy

The special items and the resources in the game will have a simulated economy. This means that the prices will be adjusted according to a different parameters.

Every item and resource has an own economy entity. An economy constists of a `buy/sell-history` and a `stock/demand`. The item-stock will not influence the amount of items that can be bought. Same for the `resource-demand`. It will not influence how many resources can be selled. They are only a virtual parameter to simulate the **price adjustments**. Additionally there is another parameter that determines a time range, over which the history should be analyzed.

This economy basically implements a very easy form of price adjustments:

    more items are bought => less stock => price high
    less items are bought => more stock => price low


    more resources are selled => less demand => price low
    less resources are selled => more demand => price high

These economies will calculate new prices after every command-execution. The prices will then be published through their corresponding events.

All prices will always be `Integers`.

## Resources

|Value | Name | Price
|---|---|---|
|COAL | Coal | 5
|IRON | Iron  | 15
|GEM | Gem | 30
|GOLD | Gold  | 50
|PLATIN | Platin | 60

* (https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/resources.json)
* (https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/resource/ResourceRestController.java)

Resources are calculated with only the sell-history factor:

    newPrice = ceil(originalPrice * historyFactor)

This factor is calculated as follows (if the factor is greater than or equals 1, the factor will be 1 and the price will stay the same):

    historyFactor = resourceDemand / soldAmountInTimeRange

### Example 1

    demand = 10; sold = 15
    factor = 10 / 15 = 0,66
    factor <= 1

=> price will be changed by a factor of 0,66

### Example 2

    demand = 10; sold = 3
    factor = 10 / 3 = 3,33
    factor > 1

=> price will stay the same

## Items

Resources are calculated with the buy-history factor and an additional round-adjust factor:

    newPrice = ceil(originalPrice * historyFactor * roundAdjust)

The buy-history factor is calculated as follows (if the factor is smaller than or equals 1, the factor will be 1 and the price will stay the same):

    historyFactor = boughtAmountInTimeRange / itemStock

Example 1:

    stock = 5; bought = 3
    factor = 3 / 5 = 0,6
    factor <= 1

=> price will stay the same

Example 2:

    stock = 2; bought = 3
    factor = 3 / 2 = 1,5
    factor > 1

=> price will be changed by a factor of 1,5

As mentioned before, the items get an additional factor for an adjustment according to the current length of the game. This is to ensure that items will not be spammed everwhere due to their "cheapness" in the endgame.

    roundAdjust = floor(200 * (1 / (1 + e^(-0,014 * currentRound) * 199)))

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/item/Item.java)

## Lifecycle

The processes of the Trading Service are always based on a user command. This is sent by the player to the game service and from there to the trading service. The Trading Service controls the money-relevant information. The service also checks whether the request was made from a valid position (space station, spawn). Then, in the case of robot-relevant trades, a single request is sent to the robot service to check whether it meets all the necessary requirements for the trade. If this is the case, the trading service receives a positive response to its request to the robot service, withdraws the money and throws an event with the transactionId associated with the trade, so that the player knows what happened with the trade. In the event of a transaction failure, an event is also thrown to inform the player of the error.

## Trading Places

* PLAYER can buy SPECIAL ITEM and UPGRADES with a ROBOT at SPACESTATION
* PLAYER can buy ROBOTS EVERYWHERE which spawns at a random SPACESTATION
* RESOURCE can be sold at any SPACESTATION

## Special Items

|Value | Name | Beschreibung | Price |
|---|---|---|---|
|ROBOT | Robot | Buys another Robot | 100
|HEALTH | Health Regeneration | Heals the robot to full HP | 50
|ENERGY | Energy Regeneration| Restores all energy | 75
|ROCKET | Rocket Item | 5 Damage on a single target| 40
|WORMHOLE | Wormhole Item | Teleport to random planet | 80
|LONG_RANGE_BOMBARDMENT | Long range Bombardment Item | 10 Damage to all robots on a specific planet | 60
|SELF_DESTRUCTION | Self Destruction Item | Self destruct a robot and damage all robots on the planet by 20 | 80
|REPAIR_SWARM | Repair Swarm Item | Heal all of your robots on the planet by 20 | 90
|NUKE | Nuke Item | 100 damage on all robots on a specific planet | 210

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/items.json)

## Upgrades

Count: 1 per robot per round

Restrictions: Only next upgrade level (1-5)

Reason: Upgrading a robot is seen as an action. The overall game is designed for only a single action per round. You can only buy the next higher upgrade level for each category. E.g. a robot with MINING_2 can only buy MINING_3. Any other upgrade to MINING will result in an error. This design takes into account the loose coupling of the trading service and avoids saving robot informations.

|Value | Beschreibung
|---|---|
|STORAGE_N | Storage Level N=1-5 Upgrade
|HEALTH_N | Health Points Level N=1-5 Upgrade
|DAMAGE_N | Damage Points Level N=1-5 Upgrade
|MINING_SPEED_N | Mining Speed Level N=1-5 Upgrade
|MINING_N | Mining Strength Level N=1-5 Upgrade
|MAX_ENERGY_N | Energy Capacity Level N=1-5 Upgrade
|ENERGY_REGEN_N | Energy Regen Level N=1-5 Upgrade

### Prices

|Level | Price
|---|---|
|1 | 50
|2|  300
|3 | 1500
|4| 4000
|5 | 15000

## Trading Semantics

### Commands

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

## Special Items

Count: 1 per robot per round.

Reason: To prevent price manipulation through a single robot.
Robots

Count: Multiple robots per round.

Reason: Buying a robot should not be bound to an existing robot. You can buy as many robots as you have money.
Regeneration

Count: 1 per robot per round

Reason: You get max health/energy with one purchase. So you do not need to buy multiple.
Upgrades

## Player and Money

Trading has a Player which has the playerId initially given by the game service. Trading is also the only service which saves the money of the players so Player has also an attribute Money which is a numeric value.

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/player/PlayerRestController.java)

## Spawns and Spacestations

Even if the trading service is not the owner of spawns and spacestations, their positions of the planets that are a spawn and a spacestation are still needed to match the robot position with the positions of the spacestations/spawns in case of a request to the trading service. It is proposed, that trading has a Positions entity which holds the position of every spawn and spacestation. The data initially comes from the map service which has to emit them to the trading service.

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/station/StationService.java)

## Tradeables (Items/Upgrades/Regeneration)

Tradeables are Item, Upgrade or Regeneration. They have an ID, Name, Description, Price, Type and OriginalPrice. Name and Description are needed to make it readble by humans if a players asks the trading service for a list of all items and their prices. All Item have an adjustable price which will be changed be the economy algorithm of the trading service, based on multiple factors such as demand, current round, etc..
Resources

Resources can be sold via the trading service. A Resource has ID, Price, Type and OriginalPrice.

## Econonomy

Economy has an trades history which tracks the trades done by the players/robots and the round numbers to later calculate the prices from.

(https://github.com/The-Microservice-Dungeon/trading/tree/main/src/main/java/dungeon/trading/economy)

## Examples

### bank-created

{ "playerId": "35184259-d156-4290-94ed-3a4b4f2c36f8", "money": 1000 }

### current-item-prices

[ { "name": "ROCKET", "price": 100 }, { "name": "NUKE", "price": 200 }, ... ]

### current-resource-prices

[ { "name": "COAL", "price": 10 }, { "name": "IRON", "price": 40 }, { "name": "GOLD", "price": 60 }, ]

#### Repository

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/item/ItemRestController.java)

## Trades

### Not enough money

{ "success": false, "moneyChangedBy": 0, "message": "not enough money", "data": null }

### Bought robot

{ "success": true, "moneyChangedBy": -500, "message": "robot bought", "data": { "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08", "player": "ae2cfcf0-e870-4360-a41e-3b3bb3312234", "planet": "2faf337d-d8d1-40fc-983e-5f130540496b", "alive": true, "maxHealth": 100, "maxEnergy": 60, "energyRegen": 8, "attackDamage": 5, "miningSpeed": 10, "health": 75, "energy": 43, "healthLevel": 5, "damageLevel": 5, "miningSpeedLevel": 5, "miningLevel": 5, "energyLevel": 5, "energyRegenLevel": 5, "storageLevel": 5, "inventory": { "maxStorage": 20, "usedStorage": 5, "coal": 3, "iron": 2, "gem": 0, "gold": 0, "platin": 0 }, "items": { "rocket": 0, "wormhole": 2, "longRangeBombardement": 0, "selfDestruction": 1, "repairSwarm": 0, "nuke": 3 } } }
Bought item

{ "success": true, "moneyChangedBy": -100, "message": "item bought", "data": { "itemType": "ROCKET" } }

### Sold resource

{ "success": true, "moneyChangedBy": 1337, "message": "resources sold", "data": { "coal": 3, "iron": 2, "gem": 0, "gold": 0, "platin": 0 } }
