---
sidebar_position: 9
---

# Map Service

## Gameworld Creation

* Create new Gameworld (player_amount round_amount)
* Get all Gameworlds
* Get the Gameworld with "status": "active" including the Planets
* Get a single Planet including planet_type
* Get a planet’s neighbours
* Get a planet’s specific neighbour (404 when not found)
* Turn planet into space station / spawn
* Get all ResourceTypes
* Get Resources for a given planet including it’s resource_type
* Mine resources (of a certain resource_type) from a given planet, for one or several robots (with given transaction IDs) *Actual mined amount is sent via event*
* Replenish resources (of a certain resource_type) on a given planet *Resource replenishment is sent via event*
* *Spawn creation is sent via event*

## Gameworld

POST /gameworlds

Payload

{
  "gameworld": {
    "player_amount": 100,
    "round_amount": 1000
  }
}

GET /gameworlds

[
   {
    "id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",
    "status": "active"
  }
]

GET /gameworlds/:id

 {
  "id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",
  "status": "active",
  "planets": []
}

## Planet

GET /planets/:id

 {
  "id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",
  "gameworld_id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",
  "taken_at": "timestamp",
  "planet_type": "spawn",
  "neighbours": [],
  "resources": [],
  "movement_difficulty": 0,
  "recharge_multiplicator": 0
}

GET /planets/:id/neighbours

{
  "neighbours": [],
}

GET /planets/:id/neighbours/:neighbour_id

{
  "neighbour": {
    "id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",
    "gameworld_id": "19ae9ee7-d790-44cd-b5fc-8d618cf92ed1",
    "taken_at": "2021-10-27T09:54:55.814Z",
    "planet_type": "spawn",
    "neighbours": [],
    "resources": [],
    "movement_difficulty": 0,
    "recharge_multiplicator": 0
  }
}

## Resource Type

GET /resource_types

{
    "resource_types": []
}

## Resource

GET /planets/:id/resources

[
  {
    "id": "f5b34539-4bcd-4a3d-b6f2-da2c580eae1c",
    "planet_id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",
    "resource_type": {
        "id": "7014e90e-7f52-481e-8685-304898348a18",
        "name": "iron",
        "difficulty": 4
    },
    "max_amount": 1000,
    "current_amount": 400
  }
]

GET /planets/:id/resources/:resource_id

{
  "id": "f5b34539-4bcd-4a3d-b6f2-da2c580eae1c",
  "planet_id": "e0448835-cc2d-40ad-b452-45bd7b7778b7",
  "resource_type": {
      "id": "7014e90e-7f52-481e-8685-304898348a18",
      "name": "iron",
      "difficulty": 4
  },
  "max_amount": 1000,
  "current_amount": 400
}

## Minings

POST /planets/:id/minings

Payload

  {
  "mining": {
    "amount_mined": 1000,
    "resource_type": "iron"
  }
}
