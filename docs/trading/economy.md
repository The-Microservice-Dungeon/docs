---
sidebar_position: 3
---

# Economy

## Price Economy

The special items and the resources in the game will have a simulated economy. This means that the prices will be adjusted according to a different parameter.

Every item and resource have an own economy entity. An economy consists of a `buy/sell-history` and a `stock/demand`. The item-stock will not influence the number of items that can be bought. Same for the `resource-demand`. It will not influence how many resources can be sold. They are only a virtual parameter to simulate the **price adjustments**. Additionally, there is another parameter that determines a time range, over which the history should be analysed.

This economy basically implements a very easy form of price adjustments:

    more items are bought => less stock => price high
    less items are bought => more stock => price low

    more resources are sold => less demand => price low
    less resources are sold => more demand => price high

These economies will calculate new prices after every command-execution. The prices will then be published through their corresponding events.

All prices will always be `Integers`.

(https://github.com/The-Microservice-Dungeon/trading/tree/main/src/main/java/dungeon/trading/economy)

### Resources sell-price adjustments

There is a calculation done, which will be changing the prices of the resources gradually every round. For the calculation only matters how many resources of a certain type were sold in the past.

    newPrice = ceil(originalPrice * historyFactor)

This factor is calculated as follows (if the factor is greater than or equals 1, the factor will be 1 and the price will stay the same):

    historyFactor = resourceDemand / soldAmountInTimeRange

Example 1

    demand = 10; sold = 15
    factor = 10 / 15 = 0,66
    factor <= 1

=> price will be changed by a factor of 0,66

Example 2

    demand = 10; sold = 3
    factor = 10 / 3 = 3,33
    factor > 1

=> price will stay the same

### Items buy-price adjustment

Items are calculated with the above presented buy-history factor and an additional round-adjusting:

    newPrice = ceil(originalPrice * historyFactor * roundAdjust)

The buy-history factor is calculated as follows (if the factor is smaller than or equals 1, the factor will be 1 and the price will stay the same):

    historyFactor = boughtAmountInTimeRange / itemStock

Example 1:

    stock = 5; bought = 3
    factor = 3 / 5 = 0,6
    factor <= 1

=> price will stay the same

Example 2:

    stock = 2; bought = 3
    factor = 3 / 2 = 1,5
    factor > 1

=> price will be changed by a factor of 1,5

Also, Items will be more expensive in the endgame phases, when players have collected more wealth. This ensures a fair play.

    roundAdjust = floor(200 * (1 / (1 + e^(-0,014 * currentRound) * 199)))

(https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/item/Item.java)

