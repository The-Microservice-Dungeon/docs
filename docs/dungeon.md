---
id: dungeon
sidebar_position: 4
---

# Gameworld and Gameplay Guide

## Dungeon Map

The map represents the gameworld and is one of the central services in our microservice dungeon game.

For a more comprehensive overwiev of the gameworld please refer to the [Map Service](/map.md)

It consists of several planets, connected with other neighbouring planets.

![Dungeon Example](/img/rules/dungeon.png)

### Planets

Our dungeon consists of planets, where each planet has an `UUID` and is directly connected to its neighbouring planets.

As player you only know the existence of the planets you have been in and which are neighbours these planets. You discover a planet and its neighbours by moving a robot onto this planet. (There is no fog of war, ich you wanted to you could monitor the movement of all robots, not only your own and generate a map from that information. Please don't do this.)

A robot can only move to a neighbouring planet. (Exception granted for special items.)

There can be several robots one a planet, with no upper limit.

You can only see the contents of the planet you are currently in.
The contents of a Planet are revealed, when a robot enters the Planet. ( Aganin by listening to all robots you could potentioly get updates to all entered Planets. *Do not do it, this is not fair gameplay*)

### Mining Resources

Resources are a central part of the microservice dungeon. It brings economical value into the gameplay.
Each resource can be mined by robots and later sold for moneten 💸. Mining speed and such is determend by your robots upgrade level.

#### Mineable Resources

There are five different kinds of mineable resources

|Value | Name | Price
|---|---|---|
|COAL | Coal | 5
|IRON | Iron  | 15
|GEM | Gem | 30
|GOLD | Gold  | 50
|PLATIN | Platin | 60

After every mining of a resource field the player which has mined said planet gets notified of the remaining amount of resources.

Resources-"patches" on a planet can be depleted.

Upon depletion a new resource spawns at a random location on the map.

If a robot mines with a full Inventory, all mined resources are lost to space.

Multiple robots can mine at the same planet and the same resource spot, with no upper limit.

### Spacestations and Trading

Spacestations are a special type of planet, which can be seen as trading and spawn posts. You can also sell resources for moneten and buy several upgrades.
There is also a simulated economy, so all prices change in the course of the game.

**You can buy:**

- New Robots (you don't have to be on a spacestation to buy a new robot)
- Robot Upgrades
- Special Items
- Energy Restoration
- HP Restoration

The costs for HP Restoration depends on the Level of that Robots Max HP independent of how much HP you are acctually repairing. Same goes for Energy Restoration and Max Engery Level.

You can only repair a robot to max HP.

Buying robots can be done globally. It will then spawn on random spacestation.
When buying a new Robot it will spawn on a random spacestation.

Each Robot can hold an unlimited amount of Special Items.

For a technical overview and all possible trading transactions please refer to [Trading](/trading/tradingService.md)

## Robots

The player interacts with the whole The Microservice Dungeon through robots. Your player is sending commands to the game service, which is relaying these commands to the robot. Following these commands the Robot can move around, fight stuff, mine resources, and much more.

A robot has a pool of HP, that you need to survice attacks and a pool of energiy, that is used to perform all actions.

The robots have an unlimited inventary, where special items can be stored.
Additionaly the robots have a second limited inventory, where mined ressources are stored.

Each robot can perform up to **one** action per game round!
Your most current command to a robot is overwriting every predating command.

Lastly the every robot has severel stats that can individualy be upgradet by buying upgrades from spacestation. These Stats are for example size of energy pool or attack power or mining speed etc.
By using these upgrades you can either specialize your robots or have an army of of low level "zombies".

### Movement

Each robot can only move one planet each turn (some special items like "wormhole" cause exeptions).

There are different types of gravity on each planet, where it get's more difficult to moving through these planets.

| Gravity | Energy Costs |
| ------- | ------------ |
| Easy    | 1            |
| Medium  | 2            |
| Hard    | 3            |

> As an example: Moving from an easy gravity planet to a neighbouring medium gravity planet costs 1 energy. The startpoint not target the energy costs.

### Fighting

As soon as you enter another planet with your robot, you get the information of how many other robots are on that planet. If you stay on a planet, you dont get information about other robots leaving the planet

Here you can choose whether you want to engange in a fight with that player or choose to be peaceful.

In battle following rules apply

- As with all action every player can only do one atack per turn. That means either one normal atack or the use of one `Special Item`

- **First all damage Dealt gets calculated**, then all damage recieved. That means even when you get destroyed you will still have dealt damage that turn.

- When a Robot is destroyed all its resources are equally divided between all other robots in that planet
- If a robot has full cargo and can not carry it´s share of resources they will again be distributed among the remaining robots wiht free cargo space

- If there is not enouth space anywhere to carry the dropped resources they will be lost to space

### Blocking

You can build barricades to stop other players from leaving the planet.

- Blockading costs 2 Energy + 10% of max energy capacity for every round the blockade is uphold
- during a blockade robot can enter the planet but not leave it
- blocking has to be renwed every round making it impossible for a Robot to do anything else while blockading, as it counts as an `Action`
- If a player tries to move through a blockade, it would still costs the energy that the `move` would have used. The Player would recive the event move unsuccsesfull.

## Gameloop

Each robot's action whether it is blocking, trading, moving, fighting or mining will be executed at the end of the corresponding phase of each round. **A robot can only execute one action per round.**
A basic single round is 60 seconds, with the first 45 seconds for command collection, in which the players can send commands to their robots and 15 seconds for the command executions. The [game service](/game/game.md) is the orchestrator of the game rythem. The actual duration of the round lenght can be changed, but there is always a fix 3/4 of a round command collection time and 1/4 command execution time.

Actions of the same phase will be batched together and executed simultaniusly for all robots in a phase in the following sequence order:

1. Blocking
2. Trading
3. Moving (with an item)
4. Moving (without an item)
5. Repairing
6. Battleing (with an item)
7. Battleing(without an item)
8. Mining
9. Regenerating

- Repairing means buying a repair item at a space station.

- Battleing (with an item) is executed before Battleing(without an item) so you could destroy someone who is attacking you with an item and in that case you don't suffer damage to your robot.

- Regenerating: Robots have a limited energy pool, which is used for all actions. They can regenerate a part of their energy by using the action `regenerate`. This action does not require energy.
