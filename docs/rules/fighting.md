---
sidebar_position: 5
---

# Fighting

As soon as you enter another planet with your robot, you get the information of other robots on that planet.

Here you can choose whether you want to engange in a fight with that player or choose to be peaceful.

You can build barricades to stop other players from leaving the room.

- Blockading costs 2 Energy + 10% of max energy capacity for every round the blockade is uphold
- If a player tries to move through a blockade it still costs energy
- If a robot is destroyed, the resources get equally distributed between all robots on the planet

:::tip Gameloop

Each action will be batched into a scheduler. The sequence order of actions executed is as follows:

blocking -> trading -> movement -> battle -> mining

Please read the [Gameloop](/rules/gameloop) information to get a better understanding.

:::
