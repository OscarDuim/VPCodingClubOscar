Feature: Prueba de Loging

  #Comentario
  @ignore
  Scenario: Ingreso con credenciales validas
    Given Navigate to phptravels
    When  Accesamos a mi cuenta
    And   Ingresamos el nombre del usuario y contrasena
    And   Presionamos Submit
    Then  Validamos que ingresamos a la pagina

