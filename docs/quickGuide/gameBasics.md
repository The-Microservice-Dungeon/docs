---
sidebar_position: 2
---

# Game Basics / Technical Gamecycle

When installation is complete, "Game Service" is initialy online and running.

:::danger Take care

There is some preparation needed, before it is posible to play.

:::

## 1. Create Game

First step is to create a Game. For that you will use a REST call.

>**POST**

        http://{defaultHost}/games

>**example payload**

    {
        "maxRounds": 58,
        "maxPlayers": 6
    }

* A "Game" consists of rounds, explained in [Gameloop](https://the-microservice-dungeon.github.io/docs/rules/gameloop). You have to specify the ammount of  rounds that will be played till the automatic end of a game.

* Also you can specify the ammount of players that will be competing. For a game to start, it is not nessecery to reach the maximum ammount of players. The game mecahnics like mapsize will scale with the actual ammount of players at the **"3. Start Game"**.

### 1.1 Change Game Parameters

Before **"3. Start Game"** or during a  **"running"** game you can change these parameters.

#### 1.1.1 amount of rounds in a game

This changes how many rounds schould be played in a given game in total.
So you can lenghten or shorten a game.
If the game is allready **"running"** and you shorten below the **"currentRoundNumber"** af that game, that game will conclude.

>**PATCH**

        http://{defaultHost}/games/{gameId}/maxRounds

>**example payload**

    {
    "maxRounds": 0
    }

#### 1.1.2 lenght of rounds in a game

This changes how long the duration of the rounds will be.
Standart lenght is 60 Seconds in total. Consisting of 3/4 *Command Collection time* and 1/4 *Command Execution time*

Imput has to be given in **MILLISECONDS(1000ms = 1s)**.

>**PATCH**

        http://{defaultHost}/games/{gameId}/duration

>**example payload**

    {
    "duration": 0
    }

## 2. Let player join to created Game

Please refer to the Chapter [Player Basics](https://the-microservice-dungeon.github.io/docs/quickGuide/howToBuildAPlayer)

## 3. Start Game(play)


## 4. Player issues Commandes

Please refer to the Chapter [Player Basics](https://the-microservice-dungeon.github.io/docs/quickGuide/howToBuildAPlayer)

## 5. End Game(play)

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