---
sidebar_position: 6
---

# Gamelog Service

There are multiple scoreboards:

* the global scoreboard

* multiple scoreboards for the different event categories:
        Fighting
        Mining
        Traveling
        Trading

The weighting for calculating the scores won't be changeable during the game.

## Scoreboard

Overview of each players score within the current running game.

### Leaderboard

    GET global leaderboard
    GET leaderboard of one specific category

## Trophy

Successes of a player that are honoured accross multiple games. Similar to "Achievments" in other games

### Trophies

    GET achieved global trophies
    GET achieved trophies for a player

Resolution Details

We decide to use event sourcing as our backbone of score calculation
Technically it would be possible to use Kafka as our event store, but since we all don't have much experience using Kafka and don't have the time to gather experience, we try to stick to the custom event store and use kafka as a simple message queue
This way we also have more control
The Proof-of-Concept that was presented by the coders made a good impression and confirmed the technical feasibility
