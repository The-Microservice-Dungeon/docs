---
sidebar_position: 1
---

# Dungeon

The dungeon represents the gameworld and is one of the central services in our microservice dungeon game.

It consists of several planets, connected with other neighbouring planets.

![Dungeon Example](/img/rules/dungeon.png)

## Planets

Our dungeon consists of planets, where each planet has an `UUID` and is directly connected to its neighbouring planets.

As player you only know the existence of the planets you have been in and which are neighbours to your robots current planet.

A robot can only move to a neighbouring planet. (Exception granted for special items.)

There can be several robots one a planet, with no upper limit.

You can only see the contents of the planet you are currently in.

### Movement

Each ship can only move one room each turn (some special items like "wormhole" cause exeptions).

There are different types of gravity on each planet, where it get's more difficult to moving through these planets.

| Gravity | Energy Costs |
| ------- | ------------ |
| Easy    | 1            |
| Medium  | 2            |
| Hard    | 3            |

> As an example: Moving from an easy gravity planet to a neighbouring medium gravity planet costs 1 energy.

### Spacestations

Spacestations are a special type of planet, which can be seen as trading and spawn posts.

On a spacestation you can:

- Sell resources
- Repair robots
- Upgrade robots
- Buy robots

