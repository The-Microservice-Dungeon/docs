---
sidebar_position: 2
---

# Tradeables (Recources/Items/Upgrades)

Tradeables are Item, Upgrade or Regeneration (this is not to be mixed up with the energy regeneration of the robot). They have an ID, Name, Description, Price, Type and Original Price. Name and Description are needed to make it readable by humans if a player asks the trading service for a list of all items and their prices. All Item have an adjustable price which will be changed be the economy algorithm of the trading service, based on multiple factors such as demand, current round, etc.
Resources

Resources can be sold via the trading service. A Resource has ID, Price, Type and OriginalPrice.

## Resources

### Resources types

Before you will be able to afford more than just your starting robot you will have to mine resources.

There are five resource types, which can be found on the planets.
These are the starting selling prices for the resources. 

|Value | Name | Price
|---|---|---|
|COAL | Coal | 5
|IRON | Iron  | 15
|GEM | Gem | 30
|GOLD | Gold  | 50
|PLATIN | Platin | 60

* (https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/resources.json)
* (https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/resource/ResourceRestController.java)

## Items

### Special Items

|Value | Name | Description | Price |
|---|---|---|---|
|ROBOT | Robot | Buys another Robot | 100
|HEALTH | Health Regeneration | Heals the robot to full HP | 50
|ENERGY | Energy Regeneration| Restores all energy | 75
|ROCKET | Rocket Item | 5 Damage on a single target| 40
|WORMHOLE | Wormhole Item | Teleport to random planet | 80
|LONG_RANGE_BOMBARDMENT | Long range Bombardment Item | 10 Damage to all robots on a specific planet | 60
|SELF_DESTRUCTION | Self Destruction Item | Self-destruct a robot and damage all robots on the planet by 20 | 80
|REPAIR_SWARM | Repair Swarm Item | Heal all your robots on the planet by 20 | 90
|NUKE | Nuke Item | 100 damage on all robots on a specific planet | 210

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/items.json)

### Item restrictions

* You can only buy one special Item per robot per round. This is to reduce price manipulation by a single player. this also includes the max health/energy item.

Robots are being listed as items but there are no limits on how many robots can be bought per round per player. You can buy as many robots as you have money, because the player is purchasing the robot directly and not through a robot.

## Upgrades

Upgrades improve the variables of your robot. For example, a bigger health pool. 

### Upgrade types

|Value | Description
|---|---|
|STORAGE_N | Storage Level N=1-5 Upgrade
|HEALTH_N | Health Points Level N=1-5 Upgrade
|DAMAGE_N | Damage Points Level N=1-5 Upgrade
|MINING_SPEED_N | Mining Speed Level N=1-5 Upgrade
|MINING_N | Mining Strength Level N=1-5 Upgrade
|MAX_ENERGY_N | Energy Capacity Level N=1-5 Upgrade
|ENERGY_REGEN_N | Energy Regen Level N=1-5 Upgrade

### Upgrade Prices

|Level | Price
|---|---|
|1 | 50
|2|  300
|3 | 1500
|4| 4000
|5 | 15000

### Upgrade Restriktion

There are two restrictions, when it comes to buying `upgrades`:

* You can only buy **one** `upgrade` per robot in one round. The reason for this is that an upgrade is seen as a single action. Just imagine it as giving your car to the shop for a tuning.

* You can only buy an upgrade to the next level of the variable, you want to improve. For example, you only can upgrade your **HEALTH_1 to HEALTH_2**.


