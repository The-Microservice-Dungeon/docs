---
id: gameLog_entry
sidebar_position: 12
---

# GameLog Service Technical View

:::warning

This part is not finished.

Please refer to [GameLog Repository](https://github.com/The-Microservice-Dungeon/gamelog)

:::

There are multiple scoreboards:

* The global scoreboard

* Multiple scoreboards for the different event categories:
        Fighting
        Mining
        Traveling
        Trading

The weighting for calculating the scores won't be changeable during the game.

## Scoreboard

Overview of each player score within the current running game.

>**GET**

    http://{defaultHost}/scoreboard/{game-id}

    {
        "scoreboard": 
    [
    {
        "player": 

                {
                    "id": "ba0e1deb-db59-4f07-a0d8-4def1f484d31",
                    "name": "Team Blue"
                },
                "totalScore": 1234.4,
                "fightingScore": 1234.4,
                "miningScore": 1234.4,
                "movementScore": 1234.4,
                "robotScore": 1234.4,
                "tradingScore": 1234.4
            }
        ]
    }

### Leaderboard

    GET global leaderboard
    GET leaderboard of one specific category

## Trophy

Successes of a player that are honoured across multiple games. Like "Achievements" in other games

### Trophies

    GET achieved global trophies
    GET achieved trophies for a player

## Repository Link GameLog

[Repository Link GameLog](https://github.com/The-Microservice-Dungeon/gamelog)


