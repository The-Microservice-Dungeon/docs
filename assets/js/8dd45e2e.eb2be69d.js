"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3386],{86859:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={sidebar_position:5},s="Trading Service Technical View",d={unversionedId:"rules/tradingService",id:"rules/tradingService",isDocsHomePage:!1,title:"Trading Service Technical View",description:"Price Econonmy",source:"@site/docs/rules/tradingService.md",sourceDirName:"rules",slug:"/rules/tradingService",permalink:"/docs/rules/tradingService",editUrl:"https://github.com/The-Microservice-Dungeon/docs/edit/main/docs/rules/tradingService.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Robot Service Technical View",permalink:"/docs/rules/robot"},next:{title:"Game Service Technical View",permalink:"/docs/rules/game"}},c=[{value:"Price Econonmy",id:"price-econonmy",children:[]},{value:"Resources",id:"resources",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}]},{value:"Items",id:"items",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"Trading Places",id:"trading-places",children:[]},{value:"Special Items",id:"special-items",children:[]},{value:"Upgrades",id:"upgrades",children:[{value:"Prices",id:"prices",children:[]}]},{value:"Trading Semantics",id:"trading-semantics",children:[{value:"Commands",id:"commands",children:[]}]},{value:"Special Items",id:"special-items-1",children:[]},{value:"Player and Money",id:"player-and-money",children:[]},{value:"Spawns and Spacestations",id:"spawns-and-spacestations",children:[]},{value:"Tradeables (Items/Upgrades/Regeneration)",id:"tradeables-itemsupgradesregeneration",children:[]},{value:"Econonomy",id:"econonomy",children:[]},{value:"Examples",id:"examples",children:[{value:"bank-created",id:"bank-created",children:[]},{value:"current-item-prices",id:"current-item-prices",children:[]},{value:"current-resource-prices",id:"current-resource-prices",children:[]}]},{value:"Trades",id:"trades",children:[{value:"Not enough money",id:"not-enough-money",children:[]},{value:"Bought robot",id:"bought-robot",children:[]},{value:"Sold resource",id:"sold-resource",children:[]}]}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"trading-service-technical-view"},"Trading Service Technical View"),(0,l.kt)("h2",{id:"price-econonmy"},"Price Econonmy"),(0,l.kt)("p",null,"The special items and the resources in the game will have a simulated economy. This means that the prices will be adjusted according to a different parameters."),(0,l.kt)("p",null,"Every item and resource has an own economy entity. An economy constists of a ",(0,l.kt)("inlineCode",{parentName:"p"},"buy/sell-history")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"stock/demand"),". The item-stock will not influence the amount of items that can be bought. Same for the ",(0,l.kt)("inlineCode",{parentName:"p"},"resource-demand"),". It will not influence how many resources can be selled. They are only a virtual parameter to simulate the ",(0,l.kt)("strong",{parentName:"p"},"price adjustments"),". Additionally there is another parameter that determines a time range, over which the history should be analyzed."),(0,l.kt)("p",null,"This economy basically implements a very easy form of price adjustments:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"more items are bought => less stock => price high\nless items are bought => more stock => price low\n\n\nmore resources are selled => less demand => price low\nless resources are selled => more demand => price high\n")),(0,l.kt)("p",null,"These economies will calculate new prices after every command-execution. The prices will then be published through their corresponding events."),(0,l.kt)("p",null,"All prices will always be ",(0,l.kt)("inlineCode",{parentName:"p"},"Integers"),"."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Price"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Coal"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRON"),(0,l.kt)("td",{parentName:"tr",align:null},"Iron"),(0,l.kt)("td",{parentName:"tr",align:null},"15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GEM"),(0,l.kt)("td",{parentName:"tr",align:null},"Gem"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GOLD"),(0,l.kt)("td",{parentName:"tr",align:null},"Gold"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PLATIN"),(0,l.kt)("td",{parentName:"tr",align:null},"Platin"),(0,l.kt)("td",{parentName:"tr",align:null},"60")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/resources.json"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/resources.json"),")"),(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/resource/ResourceRestController.java"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/resource/ResourceRestController.java"),")")),(0,l.kt)("p",null,"Resources are calculated with only the sell-history factor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"newPrice = ceil(originalPrice * historyFactor)\n")),(0,l.kt)("p",null,"This factor is calculated as follows (if the factor is greater than or equals 1, the factor will be 1 and the price will stay the same):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"historyFactor = resourceDemand / soldAmountInTimeRange\n")),(0,l.kt)("h3",{id:"example-1"},"Example 1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"demand = 10; sold = 15\nfactor = 10 / 15 = 0,66\nfactor <= 1\n")),(0,l.kt)("p",null,"=> price will be changed by a factor of 0,66"),(0,l.kt)("h3",{id:"example-2"},"Example 2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"demand = 10; sold = 3\nfactor = 10 / 3 = 3,33\nfactor > 1\n")),(0,l.kt)("p",null,"=> price will stay the same"),(0,l.kt)("h2",{id:"items"},"Items"),(0,l.kt)("p",null,"Resources are calculated with the buy-history factor and an additional round-adjust factor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"newPrice = ceil(originalPrice * historyFactor * roundAdjust)\n")),(0,l.kt)("p",null,"The buy-history factor is calculated as follows (if the factor is smaller than or equals 1, the factor will be 1 and the price will stay the same):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"historyFactor = boughtAmountInTimeRange / itemStock\n")),(0,l.kt)("p",null,"Example 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"stock = 5; bought = 3\nfactor = 3 / 5 = 0,6\nfactor <= 1\n")),(0,l.kt)("p",null,"=> price will stay the same"),(0,l.kt)("p",null,"Example 2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"stock = 2; bought = 3\nfactor = 3 / 2 = 1,5\nfactor > 1\n")),(0,l.kt)("p",null,"=> price will be changed by a factor of 1,5"),(0,l.kt)("p",null,'As mentioned before, the items get an additional factor for an adjustment according to the current length of the game. This is to ensure that items will not be spammed everwhere due to their "cheapness" in the endgame.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"roundAdjust = floor(200 * (1 / (1 + e^(-0,014 * currentRound) * 199)))\n")),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/item/Item.java"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/item/Item.java"),")"),(0,l.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,l.kt)("p",null,"The processes of the Trading Service are always based on a user command. This is sent by the player to the game service and from there to the trading service. The Trading Service controls the money-relevant information. The service also checks whether the request was made from a valid position (space station, spawn). Then, in the case of robot-relevant trades, a single request is sent to the robot service to check whether it meets all the necessary requirements for the trade. If this is the case, the trading service receives a positive response to its request to the robot service, withdraws the money and throws an event with the transactionId associated with the trade, so that the player knows what happened with the trade. In the event of a transaction failure, an event is also thrown to inform the player of the error."),(0,l.kt)("h2",{id:"trading-places"},"Trading Places"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PLAYER can buy SPECIAL ITEM and UPGRADES with a ROBOT at SPACESTATION"),(0,l.kt)("li",{parentName:"ul"},"PLAYER can buy ROBOTS EVERYWHERE which spawns at a random SPACESTATION"),(0,l.kt)("li",{parentName:"ul"},"RESOURCE can be sold at any SPACESTATION")),(0,l.kt)("h2",{id:"special-items"},"Special Items"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"),(0,l.kt)("th",{parentName:"tr",align:null},"Price"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROBOT"),(0,l.kt)("td",{parentName:"tr",align:null},"Robot"),(0,l.kt)("td",{parentName:"tr",align:null},"Buys another Robot"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEALTH"),(0,l.kt)("td",{parentName:"tr",align:null},"Health Regeneration"),(0,l.kt)("td",{parentName:"tr",align:null},"Heals the robot to full HP"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENERGY"),(0,l.kt)("td",{parentName:"tr",align:null},"Energy Regeneration"),(0,l.kt)("td",{parentName:"tr",align:null},"Restores all energy"),(0,l.kt)("td",{parentName:"tr",align:null},"75")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROCKET"),(0,l.kt)("td",{parentName:"tr",align:null},"Rocket Item"),(0,l.kt)("td",{parentName:"tr",align:null},"5 Damage on a single target"),(0,l.kt)("td",{parentName:"tr",align:null},"40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WORMHOLE"),(0,l.kt)("td",{parentName:"tr",align:null},"Wormhole Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Teleport to random planet"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LONG_RANGE_BOMBARDMENT"),(0,l.kt)("td",{parentName:"tr",align:null},"Long range Bombardment Item"),(0,l.kt)("td",{parentName:"tr",align:null},"10 Damage to all robots on a specific planet"),(0,l.kt)("td",{parentName:"tr",align:null},"60")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SELF_DESTRUCTION"),(0,l.kt)("td",{parentName:"tr",align:null},"Self Destruction Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Self destruct a robot and damage all robots on the planet by 20"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REPAIR_SWARM"),(0,l.kt)("td",{parentName:"tr",align:null},"Repair Swarm Item"),(0,l.kt)("td",{parentName:"tr",align:null},"Heal all of your robots on the planet by 20"),(0,l.kt)("td",{parentName:"tr",align:null},"90")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Nuke Item"),(0,l.kt)("td",{parentName:"tr",align:null},"100 damage on all robots on a specific planet"),(0,l.kt)("td",{parentName:"tr",align:null},"210")))),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/items.json"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/resources/items.json"),")"),(0,l.kt)("h2",{id:"upgrades"},"Upgrades"),(0,l.kt)("p",null,"Count: 1 per robot per round"),(0,l.kt)("p",null,"Restrictions: Only next upgrade level (1-5)"),(0,l.kt)("p",null,"Reason: Upgrading a robot is seen as an action. The overall game is designed for only a single action per round. You can only buy the next higher upgrade level for each category. E.g. a robot with MINING_2 can only buy MINING_3. Any other upgrade to MINING will result in an error. This design takes into account the loose coupling of the trading service and avoids saving robot informations."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STORAGE_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Storage Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEALTH_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Health Points Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DAMAGE_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Damage Points Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINING_SPEED_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Mining Speed Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MINING_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Mining Strength Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAX_ENERGY_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Energy Capacity Level N=1-5 Upgrade")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENERGY_REGEN_N"),(0,l.kt)("td",{parentName:"tr",align:null},"Energy Regen Level N=1-5 Upgrade")))),(0,l.kt)("h3",{id:"prices"},"Prices"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Level"),(0,l.kt)("th",{parentName:"tr",align:null},"Price"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"1500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"4000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"15000")))),(0,l.kt)("h2",{id:"trading-semantics"},"Trading Semantics"),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n"gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n"playerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n"robotId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n"commandType": "blocking",\n"commandObject": \n    {\n    "commandType": "blocking",\n    "planetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n    "targetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",\n    "itemName": "string",\n    "itemQuantity": 5\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/controller/CommandController.kt"},"https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/controller/CommandController.kt"),")"),(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/domain/Command.kt"},"https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/domain/Command.kt"),")"),(0,l.kt)("li",{parentName:"ul"},"(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/domain/CommandPayload.kt"},"https://github.com/The-Microservice-Dungeon/game/blob/main/src/main/kotlin/microservice/dungeon/game/aggregates/command/domain/CommandPayload.kt"),")")),(0,l.kt)("h2",{id:"special-items-1"},"Special Items"),(0,l.kt)("p",null,"Count: 1 per robot per round."),(0,l.kt)("p",null,"Reason: To prevent price manipulation through a single robot.\nRobots"),(0,l.kt)("p",null,"Count: Multiple robots per round."),(0,l.kt)("p",null,"Reason: Buying a robot should not be bound to an existing robot. You can buy as many robots as you have money.\nRegeneration"),(0,l.kt)("p",null,"Count: 1 per robot per round"),(0,l.kt)("p",null,"Reason: You get max health/energy with one purchase. So you do not need to buy multiple.\nUpgrades"),(0,l.kt)("h2",{id:"player-and-money"},"Player and Money"),(0,l.kt)("p",null,"Trading has a Player which has the playerId initially given by the game service. Trading is also the only service which saves the money of the players so Player has also an attribute Money which is a numeric value."),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/player/PlayerRestController.java"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/player/PlayerRestController.java"),")"),(0,l.kt)("h2",{id:"spawns-and-spacestations"},"Spawns and Spacestations"),(0,l.kt)("p",null,"Even if the trading service is not the owner of spawns and spacestations, their positions of the planets that are a spawn and a spacestation are still needed to match the robot position with the positions of the spacestations/spawns in case of a request to the trading service. It is proposed, that trading has a Positions entity which holds the position of every spawn and spacestation. The data initially comes from the map service which has to emit them to the trading service."),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/station/StationService.java"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/station/StationService.java"),")"),(0,l.kt)("h2",{id:"tradeables-itemsupgradesregeneration"},"Tradeables (Items/Upgrades/Regeneration)"),(0,l.kt)("p",null,"Tradeables are Item, Upgrade or Regeneration. They have an ID, Name, Description, Price, Type and OriginalPrice. Name and Description are needed to make it readble by humans if a players asks the trading service for a list of all items and their prices. All Item have an adjustable price which will be changed be the economy algorithm of the trading service, based on multiple factors such as demand, current round, etc..\nResources"),(0,l.kt)("p",null,"Resources can be sold via the trading service. A Resource has ID, Price, Type and OriginalPrice."),(0,l.kt)("h2",{id:"econonomy"},"Econonomy"),(0,l.kt)("p",null,"Economy has an trades history which tracks the trades done by the players/robots and the round numbers to later calculate the prices from."),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/trading/tree/main/src/main/java/dungeon/trading/economy"},"https://github.com/The-Microservice-Dungeon/trading/tree/main/src/main/java/dungeon/trading/economy"),")"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"bank-created"},"bank-created"),(0,l.kt)("p",null,'{ "playerId": "35184259-d156-4290-94ed-3a4b4f2c36f8", "money": 1000 }'),(0,l.kt)("h3",{id:"current-item-prices"},"current-item-prices"),(0,l.kt)("p",null,'[ { "name": "ROCKET", "price": 100 }, { "name": "NUKE", "price": 200 }, ... ]'),(0,l.kt)("h3",{id:"current-resource-prices"},"current-resource-prices"),(0,l.kt)("p",null,'[ { "name": "COAL", "price": 10 }, { "name": "IRON", "price": 40 }, { "name": "GOLD", "price": 60 }, ]'),(0,l.kt)("h4",{id:"repository"},"Repository"),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/item/ItemRestController.java"},"https://github.com/The-Microservice-Dungeon/trading/blob/main/src/main/java/dungeon/trading/item/ItemRestController.java"),")"),(0,l.kt)("h2",{id:"trades"},"Trades"),(0,l.kt)("h3",{id:"not-enough-money"},"Not enough money"),(0,l.kt)("p",null,'{ "success": false, "moneyChangedBy": 0, "message": "not enough money", "data": null }'),(0,l.kt)("h3",{id:"bought-robot"},"Bought robot"),(0,l.kt)("p",null,'{ "success": true, "moneyChangedBy": -500, "message": "robot bought", "data": { "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08", "player": "ae2cfcf0-e870-4360-a41e-3b3bb3312234", "planet": "2faf337d-d8d1-40fc-983e-5f130540496b", "alive": true, "maxHealth": 100, "maxEnergy": 60, "energyRegen": 8, "attackDamage": 5, "miningSpeed": 10, "health": 75, "energy": 43, "healthLevel": 5, "damageLevel": 5, "miningSpeedLevel": 5, "miningLevel": 5, "energyLevel": 5, "energyRegenLevel": 5, "storageLevel": 5, "inventory": { "maxStorage": 20, "usedStorage": 5, "coal": 3, "iron": 2, "gem": 0, "gold": 0, "platin": 0 }, "items": { "rocket": 0, "wormhole": 2, "longRangeBombardement": 0, "selfDestruction": 1, "repairSwarm": 0, "nuke": 3 } } }\nBought item'),(0,l.kt)("p",null,'{ "success": true, "moneyChangedBy": -100, "message": "item bought", "data": { "itemType": "ROCKET" } }'),(0,l.kt)("h3",{id:"sold-resource"},"Sold resource"),(0,l.kt)("p",null,'{ "success": true, "moneyChangedBy": 1337, "message": "resources sold", "data": { "coal": 3, "iron": 2, "gem": 0, "gold": 0, "platin": 0 } }'))}u.isMDXComponent=!0}}]);