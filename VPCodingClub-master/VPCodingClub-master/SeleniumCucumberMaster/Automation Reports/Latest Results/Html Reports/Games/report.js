$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddGames.feature");
formatter.feature({
  "line": 1,
  "name": "Add Games",
  "description": "",
  "id": "add-games",
  "keyword": "Feature"
});
formatter.uri("DeleteGames.feature");
formatter.feature({
  "line": 1,
  "name": "Delete Games",
  "description": "",
  "id": "delete-games",
  "keyword": "Feature"
});
formatter.uri("UpdateGames.feature");
formatter.feature({
  "line": 1,
  "name": "Update Games",
  "description": "",
  "id": "update-games",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Borrar juegos de la plataforma",
  "description": "",
  "id": "update-games;borrar-juegos-de-la-plataforma",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Presionamos login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Ingresamos email \"\u003cemail\u003e\" y password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Presionamos Submit login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Presionamos Games",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "actualizamos Game con atributos Name \"\u003cname\u003e\" Platform \"\u003cplatform\u003e\" y Genre \"\u003cgenre\u003e\" por atributos NewName\"\u003cnewname\u003e\" NewPlataform\"\u003cnewplataform\u003e\" NewGenre\"\u003cnewgenre\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "update-games;borrar-juegos-de-la-plataforma;",
  "rows": [
    {
      "cells": [
        "email",
        "pass",
        "name",
        "platform",
        "genre",
        "newname",
        "newplataform",
        "newgenre"
      ],
      "line": 13,
      "id": "update-games;borrar-juegos-de-la-plataforma;;1"
    },
    {
      "comments": [
        {
          "line": 15,
          "value": "#|Oscar.duim@yahoo.com|123|Mortal Kombat|Play Station|Fight|Mortal Kombat UPDATED|Play Station UPDATED|Fight UPDATED|"
        },
        {
          "line": 16,
          "value": "#|Oscar.duim@yahoo.com|123|Mortal Kombat 2|Play Station2|Pelea|Mortal Kombat 2 ACTUALIZADO|Play Station2 ACTUALIZADO|Pelea ACTUALIZADO|"
        },
        {
          "line": 17,
          "value": "#|Oscar.duim@yahoo.com|123|Mortal Kombat 3|WII|Adultos|Mortal Kombat 3 UPDATED|WII UPDATED|Adultos UPDATED|"
        },
        {
          "line": 18,
          "value": "#|Oscar.duim@yahoo.com|123|Zelda|Nintendo64|RPG|Zelda ACTUALIZADO|Nintendo64 ACTUALIZADO|RPG ACTUALIZADO|"
        },
        {
          "line": 19,
          "value": "#|Oscar.duim@yahoo.com|123|GTA|Xbox One|Violencia|GTA UPDATED|Xbox One UPDATED|Violencia UPDATED|"
        }
      ],
      "cells": [
        "Oscar.duim@yahoo.com",
        "123",
        "JUEGO NO EXISTE Y FALLARA",
        "PLATAFORMA NO EXISTE Y FALLARA",
        "GENERO NO EXISTE Y FALLARA",
        "NEW NAME",
        "NEW PLATFORM",
        "NEW GENRE"
      ],
      "line": 20,
      "id": "update-games;borrar-juegos-de-la-plataforma;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7212768805,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#|Oscar.duim@yahoo.com|123|Mortal Kombat|Play Station|Fight|Mortal Kombat UPDATED|Play Station UPDATED|Fight UPDATED|"
    },
    {
      "line": 16,
      "value": "#|Oscar.duim@yahoo.com|123|Mortal Kombat 2|Play Station2|Pelea|Mortal Kombat 2 ACTUALIZADO|Play Station2 ACTUALIZADO|Pelea ACTUALIZADO|"
    },
    {
      "line": 17,
      "value": "#|Oscar.duim@yahoo.com|123|Mortal Kombat 3|WII|Adultos|Mortal Kombat 3 UPDATED|WII UPDATED|Adultos UPDATED|"
    },
    {
      "line": 18,
      "value": "#|Oscar.duim@yahoo.com|123|Zelda|Nintendo64|RPG|Zelda ACTUALIZADO|Nintendo64 ACTUALIZADO|RPG ACTUALIZADO|"
    },
    {
      "line": 19,
      "value": "#|Oscar.duim@yahoo.com|123|GTA|Xbox One|Violencia|GTA UPDATED|Xbox One UPDATED|Violencia UPDATED|"
    }
  ],
  "line": 20,
  "name": "Borrar juegos de la plataforma",
  "description": "",
  "id": "update-games;borrar-juegos-de-la-plataforma;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Presionamos login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Ingresamos email \"Oscar.duim@yahoo.com\" y password \"123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Presionamos Submit login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Presionamos Games",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "actualizamos Game con atributos Name \"JUEGO NO EXISTE Y FALLARA\" Platform \"PLATAFORMA NO EXISTE Y FALLARA\" y Genre \"GENERO NO EXISTE Y FALLARA\" por atributos NewName\"NEW NAME\" NewPlataform\"NEW PLATFORM\" NewGenre\"NEW GENRE\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "AccessToSystemSteps.navigate_to_gamedb_herokuapp_com(int)"
});
formatter.result({
  "duration": 14241576974,
  "status": "passed"
});
formatter.match({
  "location": "AccessToSystemSteps.presionamos_login()"
});
formatter.result({
  "duration": 327117624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oscar.duim@yahoo.com",
      "offset": 18
    },
    {
      "val": "123",
      "offset": 52
    }
  ],
  "location": "AccessToSystemSteps.ingresamos_email_y_password(String,String)"
});
formatter.result({
  "duration": 1051618009,
  "status": "passed"
});
formatter.match({
  "location": "AccessToSystemSteps.presionamos_Submit_login()"
});
formatter.result({
  "duration": 258748897,
  "status": "passed"
});
formatter.match({
  "location": "AddGames.presionamos_Games()"
});
formatter.result({
  "duration": 2457705160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JUEGO NO EXISTE Y FALLARA",
      "offset": 38
    },
    {
      "val": "PLATAFORMA NO EXISTE Y FALLARA",
      "offset": 75
    },
    {
      "val": "GENERO NO EXISTE Y FALLARA",
      "offset": 116
    },
    {
      "val": "NEW NAME",
      "offset": 166
    },
    {
      "val": "NEW PLATFORM",
      "offset": 189
    },
    {
      "val": "NEW GENRE",
      "offset": 212
    }
  ],
  "location": "UpdateGames.actualizamos_Game_con_atributos_Name_Platform_y_Genre_por_atributos_NewName_NewPlataform_NewGenre(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 10187666217,
  "error_message": "java.lang.AssertionError: Game cannot be updated because it was not found... expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat stepDefs.UpdateGames.actualizamos_Game_con_atributos_Name_Platform_y_Genre_por_atributos_NewName_NewPlataform_NewGenre(UpdateGames.java:39)\r\n\tat ✽.And actualizamos Game con atributos Name \"JUEGO NO EXISTE Y FALLARA\" Platform \"PLATAFORMA NO EXISTE Y FALLARA\" y Genre \"GENERO NO EXISTE Y FALLARA\" por atributos NewName\"NEW NAME\" NewPlataform\"NEW PLATFORM\" NewGenre\"NEW GENRE\"(UpdateGames.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2304663065,
  "status": "passed"
});
});