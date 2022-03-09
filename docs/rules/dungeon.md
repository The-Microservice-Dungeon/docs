---
sidebar_position: 1
---

# Dungeon Map and Movement

The [map](/docs/technicalOverview/map.md) represents the gameworld and is one of the central services in our microservice dungeon game.

It consists of several planets, connected with other neighbouring planets.

![Dungeon Example](/img/rules/dungeon.png)

## Dungeon Map

### Planets

Our dungeon consists of planets, where each planet has an `UUID` and is directly connected to its neighbouring planets.

As player you only know the existence of the planets you have been in and which are neighbours to your robots current planet.

A robot can only move to a neighbouring planet. (Exception granted for special items.)

There can be several robots one a planet, with no upper limit.

You can only see the contents of the planet you are currently in.

(The contents of a Planet are revealed, when a robot enters the Planet. By listening to all robots you could potentioly get updates to all entered Planets. *Do not do it, this is not fair gameplay*)

### Spacestations

Spacestations are a special type of planet, which can be seen as trading and spawn posts.

On a spacestation you can:

- Sell resources
- Buy Items
- Repair robots
- Upgrade robots

Buying robots can be done globally. It will then spawn on random spacestation.

## Movement

Each ship can only move one room each turn (some special items like "wormhole" cause exeptions).

There are different types of gravity on each planet, where it get's more difficult to moving through these planets.

| Gravity | Energy Costs |
| ------- | ------------ |
| Easy    | 1            |
| Medium  | 2            |
| Hard    | 3            |

> As an example: Moving from an easy gravity planet to a neighbouring medium gravity planet costs 1 energy.

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
