---
sidebar_position: 2
---

# Commands

The game service must manage the commands from the player, because it owns the information about the round timer and can send the commands at the right time to the right services.

It ownes a list of all robots, to verify, that players dont sent commands for robots of other players.

The list is created by the information of the robot-create-events, so the service knows all the robots, that are owned by the players.

The commands from the players are stored in the game service and are sent to the other services, that fit the command-type during the execution phase.

The players recieves an id, to find the right event, that informs him of the outcome of his command.

How does a command look like?

>**example:**

    {

        "gameId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "playerToken": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "robotId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
        "commandType": "blocking",
        "commandObject": 

        {
            "commandType": "blocking",
            "planetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
            "targetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
            "itemName": "string",
            "itemQuantity": 5
        }

    }

## Wrapper

The First part of the command is a wrapper, for the game service.
With that it can confirm, the command is for the right game `gameId`, it confirms that if a robot is involved, that the robot belong to the player by checking the robots, which are regeistert to the playerToken.
The `commandType` is necessary for the game in the 'wraper' to be able to send the right command to the rigt service in the rigt round phase.

|commandType| receiving Service|
|---|---|
|"blocking"| robot |
|"movement" | robot |
|"battle" | robot |
|"mining" | robot |
|"regeneration" | robot |
|"battleItemUse" | robot |
|"repairItemUse" | robot |
|"moveItemUse"| robot |
|---|---|
|"buying"| trading |
|"selling"| trading |

More information on the sequence of these commands you can find further down in the Gameloop.

## commandObject

By seperating the wrapper from the object, the game service does not need to know about the contents of a command.

>**the object:**

        {
            "commandType": "blocking",
            "planetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
            "targetId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
            "itemName": "string",
            "itemQuantity": 5
        }

One thing to consider is that `planetId` or `targetId` is chosen depending on the target Type for example of an item or an action of the robot. For example for mining you would use `planetId` and for attacking another robot it would be `targetId`.

The response is always a `transactionId` with which by listening to the rigt service you can recive the coresponding resolution of your command as an event.

>**response example**

    {
        "transactionId": "d290f1ee-6c54-4b01-90e6-d701748f0851"
    }