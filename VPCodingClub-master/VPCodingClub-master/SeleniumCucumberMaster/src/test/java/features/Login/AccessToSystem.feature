Feature: Access to GameDB2

  Scenario Outline: Ingreso con credenciales validas o invalidas
    Given Navigate to gamedb2.herokuapp.com
    When  Presionamos login
    And   Ingresamos email "<email>" y password "<pass>"
    And   Presionamos Submit login
    Then  Validamos que ingresamos a pagina con mensaje "<mensaje>" y condicion "<condicion>" y name "<name>"
    Then  Validamos en HomePage"<currentPage>" los HomeWebElements pageName"<pagename>" gamesModule"<gamesmodule>" logoutLabel"<logoutlabel>" angularVersion"<angularversion>" footerLinks "<footerlinks>"
    Then  Validamos el logout con name "<name>"

Examples:
 |email|pass|name|mensaje|condicion|currentPage|pagename|gamesmodule|logoutlabel|angularversion|footerlinks|
||||Please enter your email and password.|unsuccessfull login|LoginPage||||||
|Oscarduim@velocity.com|abc|Oscar|This email is not registered.|unsuccessfull login|LoginPage||||||
|Oscar.duim@yahoo.com|abc|Oscar|This password is not correct.|unsuccessfull login|LoginPage||||||
|Oscar.duim@yahoo.com|123|Oscar||successfull login|HomePage|gamedb2|Games|Logout|Angular Fullstack v4.1.4|Documentation,Chat on Gitter,Issues,Donate to our Open Collective|
|Oscar.duim@gmail.com|123|oscar||successfull login|HomePage|gamedb2|Games|Logout|Angular Fullstack v4.1.4|Documentation,Chat on Gitter,Issues,Donate to our Open Collective|