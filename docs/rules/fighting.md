---
sidebar_position: 5
---

# Fighting

As soon as you enter another planet with your robot, you get the information of How many other robots are on that planet.

Here you can choose whether you want to engange in a fight with that player or choose to be peaceful.

In battle following rules apply

- As with all action every player can only do one atack per turn. That means either one normal atack or one Special Item
- First all damage Dealt gets calculated, then all damage recieved. That means even when you get destroyed you will still have dealt damage that turn.
- When a Robot is destroyed all its resources are equally divided between all other ships in that room
- If a ship has full cargo and can not carry it´s share of resources they will again be distributed among the remaining ships wiht free cargo space
- If there is not enouth space anywhere to carry the dropped resources they will be lost to space

You can build barricades to stop other players from leaving the room.

- Blockading costs 2 Energy + 10% of max energy capacity for every round the blockade is uphold
- during a blockade robot can enter the room but not leave it
- blocking has to be renwed every round making it impossible for a Robot to do anything else while blockading
- If a player tries to move through a blockade it still costs energy

:::tip Gameloop

Each action will be batched into a scheduler. The sequence order of actions executed is as follows:

blocking -> trading -> movement -> battle -> mining -> scanning

Please read the [Gameloop](/rules/gameloop) information to get a better understanding.

:::
