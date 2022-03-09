---
sidebar_position: 3
---

# Gameloop

Each robot's action whether it is blocking, trading, moving, fighting or mining will be executed at the end of the corresponding phase of each round. **A robot can only execute one action per round.**
A basic single round is 60 seconds, with the first 45 seconds for command collection, in wich the players can send commands to their robots and 15 seconds for the command executions. The [game service](/docs/technicalOverview/game.md) is the orchestrator of the game rythem.

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
