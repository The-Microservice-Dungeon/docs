---
sidebar_position: 1
---

# Architecture Overview

The-Microservice-Dungeon is a microservice architecture project.

We have build several microservices, which are communicating with each other.

<!--- ![Overview](/static/img/game_flow.png) --->

This picture is a great starting point to understand how The-Microservice-Dungeon is working.

## Game

This service is the orchestrater of the project.

* `Players` can join the `Game`.

* When a `Game` is started, it orchastrates the timing on the base of which the other services are communicating.

* `Players` are sending Commands to the `Game`. These Commands are collected for the specific round and forewarded to the recivieng microsercie. E.g. ich a `player` wants a `Robot` to move, the `Robot` recevies the command

## Player

The `Players` join the `Game` and issue commands to interact with The-Microservice-Dungeon.

## Robot

The `Robots` are like the extendet arm of the `Player`.

* The `Player` issues a command to a `Robot` which then can interact with the `Map` or with other `Robots`. E.g. move to another Planet on the `Map`.

## Trading

`Trading` is used in three different ways

* First it acts as a bank depot for the `Players`, and controlls if the `Players` has enough [moneten 💸](/rules/trading) for a purchase.

* Second it can generate Robots after an Issues "buy robot" command of the `Player`.

* Third `Trading` is controling the economy, by adjusting prices, in relation to the `Game`-situation on the battlefied.

* Forth `Players` upgrade their `Robots` by buing upgrades or single use Items with the "buy" command

## Map

## GameLog

This service tracks the progress of the `Players` and the `Game`.

* On one hand it works as a log service for the `Game` and protocols the commands.

* On the other hand it serves as a leaderboard, which displays the `Players` progress throug points and achivements

:::danger TODO
Notes to Services

Map Map manages the gameworld and is responsible for generating and linking planets and their resources.
Robot Robot is the largest service, because it manages and controls all features triggered by robots. This includes, for example, minig rates, life points, attack values, inventory, etc.
Trading The Trading service manages a playerâ€™s money. All transactions, i.e. buying and selling resources, upgrades, etc. are managed by Trading.
Game The game service provides the interface between players and other services. It takes care of the registration and authorization of players, the order of commands and the round time.
Gamelog The Gamelog service is responsible for the game results. Gamelog listens to all the information in the entire network and thus tries to build a complete version of the events.
:::
