---
sidebar_position: 3
---

# Game Basics / Technical Game cycle

When installation is complete, "Game Service" is initially online and running.

:::danger Take care

There is some preparation needed, before it is possible to play.

In the API documentation you will find that it says you need an **BearerAuth (admin)**. You can ignore this information. **It is obsolete**.  

:::

## 1. Create Game

First step is to create a Game. For that you will use a REST call.

>**POST**

        http://{defaultHost}/games

>**example request payload**

    {
        "maxRounds": 58,
        "maxPlayers": 6
    }

You should get a `UUID` as a response! If not something went wrong.

>**Response example payload**

    {
        "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851"
    }

* A "Game" consists of rounds, explained in [Gameloop](/game/game.md). You have to specify the amount of  rounds that will be played till the automatic end of a game.

* Also, you can specify the number of players that will be competing. For a game to start, it is not necessary to reach the maximum number of players. The game mechanics like map size will scale with the actual number of players at the **"3. Start Game"**.

### 1.1 Change Game Parameters

Before **"3. Start Game"** or during a  **"running"** game you can change these parameters.

#### 1.1.1 number of rounds in a game

This changes how many rounds should be played in each game in total.
So you can lengthen or shorten a game.
If the game is already **"running"** and you shorten below the **"currentRoundNumber"** of that game, that game will conclude.

>**PATCH**

        http://{defaultHost}/games/{gameId}/maxRounds

>**example request payload**

    {
    "maxRounds": 0
    }

#### 1.1.2 length of rounds in a game

This changes how long the duration of the rounds will be.
Standard length is 60 Seconds in total. Consisting of 3/4 *Command Collection time* and 1/4 *Command Execution time*

Input has to be given in **MILLISECONDS(1000ms = 1s)**.

>**PATCH**

        http://{defaultHost}/games/{gameId}/duration

>**example request payload**

    {
    "duration": 0
    }

## 2. Let player join to created Game

Please refer to the Chapter [Player Basics](https://the-microservice-dungeon.github.io/docs/quickGuide/howToBuildAPlayer)

## 3. Start Game(play)

The start of a game is simple. Just use this REST Call

        http://{defaultHost}/games/{gameId}/gameCommands/start

You can control if a game is running with the REST calls:

>**GET**

        http://{defaultHost}/games

>**example response payload**

    [

    {

        "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "gameStatus": "running",
        "maxPlayers": 6,
        "maxRounds": 58,
        "currentRoundNumber": 0,
        "roundLengthInMillis": 60000,
        "participatingPlayers": 

            [
                "d290f1ee-6c54-4b01-90e6-d701748f0851"
            ]
        }

    ]

* **"gameStatus": "running"** will signalise you that a game is running.

Or you could look if the time is changed with this REST Call.

>**GET**

        http://{defaultHost}/games/{gameId}/time

>**example response payload**

        {

            "gameTime": 183,
            "roundCount": 4,
            "roundTime": 33

        }

## 4. Player issues Commands

Please refer to the Chapter [Player Basics](https://the-microservice-dungeon.github.io/docs/quickGuide/howToBuildAPlayer)

## 5. End Game(play)

There are three possibilities how a game should end.

* The game has reached the round number, which was defined earlier.

* You tried to change the maximum round number and the new value was lower than the current round count of the game.

* You used the **POST** REST call to end a game.

        http://{defaultHost}/games/{gameId}/gameCommands/end

## Warning

There can only be one **'started'** game at a time.
Make sure there is no **'started'** game with this REST call.

> **GET**

        http://{defaultHost}/games

The response will look like this. Pay attention to the **"gameStatus": "running"**.

>**example response payload**

    [
        {
        "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "gameStatus": "running",
        "maxPlayers": 6,
        "maxRounds": 58,
        "currentRoundNumber": 0,
        "roundLengthInMillis": 60000,
        "participatingPlayers": [
        "d290f1ee-6c54-4b01-90e6-d701748f0851"
        ]
        }
    ]

## Repository Link Game

[Repository Link Game](https://github.com/The-Microservice-Dungeon/game/tree/main/src/main/kotlin/microservice/dungeon/game/aggregates)

