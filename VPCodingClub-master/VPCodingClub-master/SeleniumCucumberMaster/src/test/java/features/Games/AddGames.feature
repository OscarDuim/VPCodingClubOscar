Feature: Add Games


  Scenario Outline: Agregar juegos a la plataforma
    Given Navigate to gamedb2.herokuapp.com
    When  Presionamos login
    And   Ingresamos email "<email>" y password "<pass>"
    And   Presionamos Submit login
    And   Presionamos Games
    And   Ingresamos Name "<name>" Platform "<platform>" y Genre "<genre>"

    Examples:
      |email|pass|name|platform|genre|

      |Oscar.duim@yahoo.com|123|Mortal Kombat|Play Station|Fight|
      |Oscar.duim@yahoo.com|123|Mortal Kombat 2|Play Station2|Pelea|
      |Oscar.duim@yahoo.com|123|Mortal Kombat 3|WII|Adultos|
      |Oscar.duim@yahoo.com|123|Zelda|Nintendo64|RPG|
      |Oscar.duim@yahoo.com|123|GTA|Xbox One|Violencia|
