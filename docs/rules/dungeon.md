---
sidebar_position: 2
---

# Gameworld and Gameplay 

## Dungeon Map and Movement

The map represents the gameworld and is one of the central services in our microservice dungeon game.

It consists of several planets, connected with other neighbouring planets.

![Dungeon Example](/img/rules/dungeon.png)

### Planets

Our dungeon consists of planets, where each planet has an `UUID` and is directly connected to its neighbouring planets.

As player you only know the existence of the planets you have been in and which are neighbours to your robots current planet.

A robot can only move to a neighbouring planet. (Exception granted for special items.)

There can be several robots one a planet, with no upper limit.

You can only see the contents of the planet you are currently in.

(The contents of a Planet are revealed, when a robot enters the Planet. By listening to all robots you could potentioly get updates to all entered Planets. *Do not do it, this is not fair gameplay*)

### Mining Resources

Resources are a central part of the microservice dungeon. It brings economical value into the gameplay.
Each resource can be mined by robots and later [sold for moneten 💸](/rules/trading)

#### Mineable Resources

There are five different kinds of mineable resources

|Value | Name | Price
|---|---|---|
|COAL | Coal | 5
|IRON | Iron  | 15
|GEM | Gem | 30
|GOLD | Gold  | 50
|PLATIN | Platin | 60

After every mining of a resource field the player which has mined said room gets notified of the remaining amount of resources.

Resources can be depleted.

Upon depletion a new resource spawns at a random location on the map.

If a robot mines with a full Inventory, all mined resources are lost to space.

Multiple robots can mine at the same room and the same resource spot, with no upper limit.

### Spacestations and Trading

Spacestations are a special type of planet, which can be seen as trading and spawn posts. You can also sell resources for moneten and buy several upgrades.

**You can buy:**

- New Robots (you don't have to be on a spacestation to buy a new robot)
- Robot Upgrades
- Special Items
- Energy Restoration
- HP Restoration

The costs for HP Restoration depends on the Level of that Robots Max HP independent of how much HP you are acctually repairing. Same goes for Energy Restoration and Max Engery Level.

You can only repair a robot to max HP.

When buying a new Robot it will spawn on a random spacestation.

Each Robot can hold an unlimited amount of Special Items.

For a technical overview please refer to [Trading](/docs/rules/tradingservice.md)

Buying robots can be done globally. It will then spawn on random spacestation.

### Movement

Each ship can only move one room each turn (some special items like "wormhole" cause exeptions).

There are different types of gravity on each planet, where it get's more difficult to moving through these planets.

| Gravity | Energy Costs |
| ------- | ------------ |
| Easy    | 1            |
| Medium  | 2            |
| Hard    | 3            |

> As an example: Moving from an easy gravity planet to a neighbouring medium gravity planet costs 1 energy.

### Fighting

As soon as you enter another planet with your robot, you get the information of how many other robots are on that planet.

Here you can choose whether you want to engange in a fight with that player or choose to be peaceful.

In battle following rules apply

- As with all action every player can only do one atack per turn. That means either one normal atack or the use of one `Special Item`

- **First all damage Dealt gets calculated**, then all damage recieved. That means even when you get destroyed you will still have dealt damage that turn.

- When a Robot is destroyed all its resources are equally divided between all other ships in that room
- If a ship has full cargo and can not carry it´s share of resources they will again be distributed among the remaining ships wiht free cargo space

- If there is not enouth space anywhere to carry the dropped resources they will be lost to space

### Blocking

You can build barricades to stop other players from leaving the room.

- Blockading costs 2 Energy + 10% of max energy capacity for every round the blockade is uphold
- during a blockade robot can enter the room but not leave it
- blocking has to be renwed every round making it impossible for a Robot to do anything else while blockading, as it counts as an `Action`
- If a player tries to move through a blockade, it would still costs the energy that the `move` would have used. The Player would recive the event move unsuccsesfull.

### Gameloop

Each robot's action whether it is blocking, trading, moving, fighting or mining will be executed at the end of the corresponding phase of each round. **A robot can only execute one action per round.**
A basic single round is 60 seconds, with the first 45 seconds for command collection, in wich the players can send commands to their robots and 15 seconds for the command executions. The [game service](/rules/game.md) is the orchestrator of the game rythem.

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


### Movement Command

    {
    "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "playerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "robotId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
    "commandType": "move",
    "commandObject": 
        {
        "commandType": "move",
        "planetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "targetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "itemName": "",
        "itemQuantity": ""
        }
    }
