Feature: Sing Up at GameDB2

  Scenario Outline: Sing Up con errores o sin errores
    Given Navigate to gamedb2.herokuapp.com
    When  Presionamos SingUp
    And   Ingresamos name "<name>" email "<email>" password "<password>" y passwordConfirm "<passwordConfirm>"
    And   Presionamos SingUpSubmit
    Then  Validamos que ingresamos a pagina con mensaje "<mensaje>"condicion "<condicion>" y name "<name>"
    Examples:
      |name|email|password|passwordConfirm|mensaje|condicion|
      ||Oscar.duim@gmail.com|123|123|A name is required|unsuccessfull singUp|
      |Oscar||123|123|What's your email address?|unsuccessfull singUp|
      |Oscar|Oscar.duim@gmail.com||123|Password must be at least 3 characters.|unsuccessfull singUp|
      |Oscar|Oscar.duim@gmail.com|123||confirmPassword cannot be empty|unsuccessfull singUp|
      |Oscar|Oscar.duim@gmail.com|123|123|The specified email address is already in use.|unsuccessfull singUp|
      |Oscar|Oscar.duim@biv15.com|123|123||successfull singUp|