---
sidebar_position: 1
---

# Dungeon

The dungeon in our game is the central service which consists of planets and locations of spawns, spacestations and mineable resources.

![Dungeon Example](/img/rules/dungeon_alpha_0.1.png)

## Planets

Our dungeon consists of planets, where each planet has an `UUID` and is directly connected to its neighbouring planets.

As player you only know the existence of the planets you have been in and which are neighbours to your robots current planet.

A robot can only move to a neighbouring planet. (Exception granted for special items.)

There can be several robots in one room, with no upper limit.

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

Spacestations are a special type of planet where you have the option to:

- Sell resources
- Repair robots
- Upgrade robots
- Buy robots

### Spawns

Each robot starts at the player's spawn point.

Each player starts with 200$ and 1 basic robot.

When your last robot is destroyed, you respawn with your start resources (200$ and 1 basic robot).

A spawn is similair to a spacestation but with the following additions:

- It's a safe zone meaning no robot of a different faction can enter the spawn
- It can only be entered by the robots which belong to the team that spawned there
- Energy regeneration is twice as fast
