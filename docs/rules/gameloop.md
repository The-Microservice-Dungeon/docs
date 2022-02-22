---
sidebar_position: 6
---

# Gameloop

Each robot's action whether it is blocking, trading, moving, fighting or mining will be executed at the end of each round.
A single round is 60 seconds and will be tracked by a special service.

During the 60 second timeframe each player can schedule one command per robot to be executed at the end of the round.

Actions will be batched together and executed after each other in the following sequence order:

1. Blocking
2. Trading
3. Moving
4. Fighting
5. Mining
6. Scouting(deprecated not implemented)
