Feature: Update Games

  @ignore
  Scenario Outline: Borrar juegos de la plataforma
    Given Navigate to gamedb2.herokuapp.com
    When  Presionamos login
    And   Ingresamos email "<email>" y password "<pass>"
    And   Presionamos Submit login
    And   Presionamos Games
    And   actualizamos Game con atributos Name "<name>" Platform "<platform>" y Genre "<genre>" por atributos NewName"<newname>" NewPlataform"<newplataform>" NewGenre"<newgenre>"

    Examples:
      |email|pass|name|platform|genre|newname|newplataform|newgenre|

      |Oscar.duim@yahoo.com|123|Mortal Kombat|Play Station|Fight|Mortal Kombat UPDATED|Play Station UPDATED|Fight UPDATED|
      |Oscar.duim@yahoo.com|123|Mortal Kombat 2|Play Station2|Pelea|Mortal Kombat 2 ACTUALIZADO|Play Station2 ACTUALIZADO|Pelea ACTUALIZADO|
      |Oscar.duim@yahoo.com|123|Mortal Kombat 3|WII|Adultos|Mortal Kombat 3 UPDATED|WII UPDATED|Adultos UPDATED|
      |Oscar.duim@yahoo.com|123|Zelda|Nintendo64|RPG|Zelda ACTUALIZADO|Nintendo64 ACTUALIZADO|RPG ACTUALIZADO|
      |Oscar.duim@yahoo.com|123|GTA|Xbox One|Violencia|GTA UPDATED|Xbox One UPDATED|Violencia UPDATED|
      |Oscar.duim@yahoo.com|123|JUEGO NO EXISTE Y FALLARA|PLATAFORMA NO EXISTE Y FALLARA|GENERO NO EXISTE Y FALLARA|NEW NAME|NEW PLATFORM|NEW GENRE|

