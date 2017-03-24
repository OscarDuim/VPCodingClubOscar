$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccessToSystem.feature");
formatter.feature({
  "line": 1,
  "name": "Access to GameDB2",
  "description": "",
  "id": "access-to-gamedb2",
  "keyword": "Feature"
});
formatter.uri("SingUp.feature");
formatter.feature({
  "line": 1,
  "name": "Sing Up at GameDB2",
  "description": "",
  "id": "sing-up-at-gamedb2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Sing Up con errores o sin errores",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Presionamos SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Ingresamos name \"\u003cname\u003e\" email \"\u003cemail\u003e\" password \"\u003cpassword\u003e\" y passwordConfirm \"\u003cpasswordConfirm\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Presionamos SingUpSubmit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validamos que ingresamos a pagina con mensaje \"\u003cmensaje\u003e\"condicion \"\u003ccondicion\u003e\" y name \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "password",
        "passwordConfirm",
        "mensaje",
        "condicion"
      ],
      "line": 10,
      "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;1"
    },
    {
      "cells": [
        "",
        "Oscar.duim@gmail.com",
        "123",
        "123",
        "A name is required",
        "unsuccessfull singUp"
      ],
      "line": 11,
      "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;2"
    },
    {
      "cells": [
        "Oscar",
        "",
        "123",
        "123",
        "What\u0027s your email address?",
        "unsuccessfull singUp"
      ],
      "line": 12,
      "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;3"
    },
    {
      "cells": [
        "Oscar",
        "Oscar.duim@gmail.com",
        "",
        "123",
        "Password must be at least 3 characters.",
        "unsuccessfull singUp"
      ],
      "line": 13,
      "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;4"
    },
    {
      "cells": [
        "Oscar",
        "Oscar.duim@gmail.com",
        "123",
        "",
        "confirmPassword cannot be empty",
        "unsuccessfull singUp"
      ],
      "line": 14,
      "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;5"
    },
    {
      "cells": [
        "Oscar",
        "Oscar.duim@gmail.com",
        "123",
        "123",
        "The specified email address is already in use.",
        "unsuccessfull singUp"
      ],
      "line": 15,
      "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;6"
    },
    {
      "cells": [
        "Oscar",
        "Oscar.duim@biv13.com",
        "123",
        "123",
        "",
        "successfull singUp"
      ],
      "line": 16,
      "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7296812536,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Sing Up con errores o sin errores",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Presionamos SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Ingresamos name \"\" email \"Oscar.duim@gmail.com\" password \"123\" y passwordConfirm \"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Presionamos SingUpSubmit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validamos que ingresamos a pagina con mensaje \"A name is required\"condicion \"unsuccessfull singUp\" y name \"\"",
  "matchedColumns": [
    0,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 23111042336,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUp()"
});
formatter.result({
  "duration": 273663995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    },
    {
      "val": "Oscar.duim@gmail.com",
      "offset": 26
    },
    {
      "val": "123",
      "offset": 58
    },
    {
      "val": "123",
      "offset": 82
    }
  ],
  "location": "SingUpSteps.ingresamos_name_email_password_y_passwordConfirm(String,String,String,String)"
});
formatter.result({
  "duration": 1774686613,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUpSubmit()"
});
formatter.result({
  "duration": 300969326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A name is required",
      "offset": 47
    },
    {
      "val": "unsuccessfull singUp",
      "offset": 77
    },
    {
      "val": "",
      "offset": 107
    }
  ],
  "location": "SingUpSteps.validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(String,String,String)"
});
formatter.result({
  "duration": 5369567011,
  "status": "passed"
});
formatter.after({
  "duration": 1850030297,
  "status": "passed"
});
formatter.before({
  "duration": 4020822239,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sing Up con errores o sin errores",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Presionamos SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Ingresamos name \"Oscar\" email \"\" password \"123\" y passwordConfirm \"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Presionamos SingUpSubmit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validamos que ingresamos a pagina con mensaje \"What\u0027s your email address?\"condicion \"unsuccessfull singUp\" y name \"Oscar\"",
  "matchedColumns": [
    0,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 22901866213,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUp()"
});
formatter.result({
  "duration": 381402611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oscar",
      "offset": 17
    },
    {
      "val": "",
      "offset": 31
    },
    {
      "val": "123",
      "offset": 43
    },
    {
      "val": "123",
      "offset": 67
    }
  ],
  "location": "SingUpSteps.ingresamos_name_email_password_y_passwordConfirm(String,String,String,String)"
});
formatter.result({
  "duration": 1266713116,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUpSubmit()"
});
formatter.result({
  "duration": 144351918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What\u0027s your email address?",
      "offset": 47
    },
    {
      "val": "unsuccessfull singUp",
      "offset": 85
    },
    {
      "val": "Oscar",
      "offset": 115
    }
  ],
  "location": "SingUpSteps.validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(String,String,String)"
});
formatter.result({
  "duration": 5511782900,
  "status": "passed"
});
formatter.after({
  "duration": 1441753826,
  "status": "passed"
});
formatter.before({
  "duration": 4078257385,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Sing Up con errores o sin errores",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Presionamos SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Ingresamos name \"Oscar\" email \"Oscar.duim@gmail.com\" password \"\" y passwordConfirm \"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Presionamos SingUpSubmit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validamos que ingresamos a pagina con mensaje \"Password must be at least 3 characters.\"condicion \"unsuccessfull singUp\" y name \"Oscar\"",
  "matchedColumns": [
    0,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 12001860095,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUp()"
});
formatter.result({
  "duration": 398977974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oscar",
      "offset": 17
    },
    {
      "val": "Oscar.duim@gmail.com",
      "offset": 31
    },
    {
      "val": "",
      "offset": 63
    },
    {
      "val": "123",
      "offset": 84
    }
  ],
  "location": "SingUpSteps.ingresamos_name_email_password_y_passwordConfirm(String,String,String,String)"
});
formatter.result({
  "duration": 1720770723,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUpSubmit()"
});
formatter.result({
  "duration": 239992026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password must be at least 3 characters.",
      "offset": 47
    },
    {
      "val": "unsuccessfull singUp",
      "offset": 98
    },
    {
      "val": "Oscar",
      "offset": 128
    }
  ],
  "location": "SingUpSteps.validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(String,String,String)"
});
formatter.result({
  "duration": 5430690765,
  "status": "passed"
});
formatter.after({
  "duration": 1563978043,
  "status": "passed"
});
formatter.before({
  "duration": 4566902007,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Sing Up con errores o sin errores",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Presionamos SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Ingresamos name \"Oscar\" email \"Oscar.duim@gmail.com\" password \"123\" y passwordConfirm \"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Presionamos SingUpSubmit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validamos que ingresamos a pagina con mensaje \"confirmPassword cannot be empty\"condicion \"unsuccessfull singUp\" y name \"Oscar\"",
  "matchedColumns": [
    0,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 24611072930,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUp()"
});
formatter.result({
  "duration": 323957990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oscar",
      "offset": 17
    },
    {
      "val": "Oscar.duim@gmail.com",
      "offset": 31
    },
    {
      "val": "123",
      "offset": 63
    },
    {
      "val": "",
      "offset": 87
    }
  ],
  "location": "SingUpSteps.ingresamos_name_email_password_y_passwordConfirm(String,String,String,String)"
});
formatter.result({
  "duration": 2393093334,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUpSubmit()"
});
formatter.result({
  "duration": 237660592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "confirmPassword cannot be empty",
      "offset": 47
    },
    {
      "val": "unsuccessfull singUp",
      "offset": 90
    },
    {
      "val": "Oscar",
      "offset": 120
    }
  ],
  "location": "SingUpSteps.validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(String,String,String)"
});
formatter.result({
  "duration": 5100833923,
  "status": "passed"
});
formatter.after({
  "duration": 1646973695,
  "status": "passed"
});
formatter.before({
  "duration": 3943143962,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Sing Up con errores o sin errores",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Presionamos SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Ingresamos name \"Oscar\" email \"Oscar.duim@gmail.com\" password \"123\" y passwordConfirm \"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Presionamos SingUpSubmit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validamos que ingresamos a pagina con mensaje \"The specified email address is already in use.\"condicion \"unsuccessfull singUp\" y name \"Oscar\"",
  "matchedColumns": [
    0,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 24261156914,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUp()"
});
formatter.result({
  "duration": 257467517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oscar",
      "offset": 17
    },
    {
      "val": "Oscar.duim@gmail.com",
      "offset": 31
    },
    {
      "val": "123",
      "offset": 63
    },
    {
      "val": "123",
      "offset": 87
    }
  ],
  "location": "SingUpSteps.ingresamos_name_email_password_y_passwordConfirm(String,String,String,String)"
});
formatter.result({
  "duration": 1194738286,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUpSubmit()"
});
formatter.result({
  "duration": 220474458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The specified email address is already in use.",
      "offset": 47
    },
    {
      "val": "unsuccessfull singUp",
      "offset": 105
    },
    {
      "val": "Oscar",
      "offset": 135
    }
  ],
  "location": "SingUpSteps.validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(String,String,String)"
});
formatter.result({
  "duration": 5508537603,
  "status": "passed"
});
formatter.after({
  "duration": 1540135126,
  "status": "passed"
});
formatter.before({
  "duration": 4678988475,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Sing Up con errores o sin errores",
  "description": "",
  "id": "sing-up-at-gamedb2;sing-up-con-errores-o-sin-errores;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Presionamos SingUp",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Ingresamos name \"Oscar\" email \"Oscar.duim@biv13.com\" password \"123\" y passwordConfirm \"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Presionamos SingUpSubmit",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Validamos que ingresamos a pagina con mensaje \"\"condicion \"successfull singUp\" y name \"Oscar\"",
  "matchedColumns": [
    0,
    4,
    5
  ],
  "keyword": "Then "
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
  "duration": 13290595905,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUp()"
});
formatter.result({
  "duration": 531865759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oscar",
      "offset": 17
    },
    {
      "val": "Oscar.duim@biv13.com",
      "offset": 31
    },
    {
      "val": "123",
      "offset": 63
    },
    {
      "val": "123",
      "offset": 87
    }
  ],
  "location": "SingUpSteps.ingresamos_name_email_password_y_passwordConfirm(String,String,String,String)"
});
formatter.result({
  "duration": 1662890291,
  "status": "passed"
});
formatter.match({
  "location": "SingUpSteps.presionamos_SingUpSubmit()"
});
formatter.result({
  "duration": 162537181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "successfull singUp",
      "offset": 59
    },
    {
      "val": "Oscar",
      "offset": 87
    }
  ],
  "location": "SingUpSteps.validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(String,String,String)"
});
formatter.result({
  "duration": 5083885434,
  "error_message": "java.lang.AssertionError: expected [https://gamedb2.herokuapp.com/signup] but found [https://gamedb2.herokuapp.com/]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertEquals(Assert.java:123)\r\n\tat org.testng.Assert.assertEquals(Assert.java:176)\r\n\tat org.testng.Assert.assertEquals(Assert.java:186)\r\n\tat stepDefs.SingUpSteps.validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(SingUpSteps.java:77)\r\n\tat ✽.Then Validamos que ingresamos a pagina con mensaje \"\"condicion \"successfull singUp\" y name \"Oscar\"(SingUp.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1952180341,
  "status": "passed"
});
});