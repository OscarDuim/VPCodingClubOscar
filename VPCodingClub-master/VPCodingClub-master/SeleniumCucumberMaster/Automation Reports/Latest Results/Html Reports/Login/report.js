$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccessToSystem.feature");
formatter.feature({
  "line": 1,
  "name": "Access to GameDB2",
  "description": "",
  "id": "access-to-gamedb2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Comentario"
    }
  ],
  "line": 5,
  "name": "Ingreso con credenciales validas o invalidas",
  "description": "",
  "id": "access-to-gamedb2;ingreso-con-credenciales-validas-o-invalidas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Presionamos login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Ingresamos email \"\u003cemail\u003e\" y password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Presionamos Submit login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validamos que ingresamos a pagina con mensaje \"\u003cmensaje\u003e\" y condicion \"\u003ccondicion\u003e\" y name \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "access-to-gamedb2;ingreso-con-credenciales-validas-o-invalidas;",
  "rows": [
    {
      "cells": [
        "email",
        "pass",
        "name",
        "mensaje",
        "condicion"
      ],
      "line": 12,
      "id": "access-to-gamedb2;ingreso-con-credenciales-validas-o-invalidas;;1"
    },
    {
      "comments": [
        {
          "line": 13,
          "value": "#||||Please enter your email and password.|unsuccessfull login|"
        }
      ],
      "cells": [
        "Oscar.duim@gmail.com",
        "abc",
        "Oscar",
        "This email is not registered.",
        "unsuccessfull login"
      ],
      "line": 14,
      "id": "access-to-gamedb2;ingreso-con-credenciales-validas-o-invalidas;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15216644527,
  "error_message": "java.lang.AssertionError: Exception occured while invoking browser\r\n\tat org.testng.Assert.fail(Assert.java:83)\r\n\tat com.vpcodingclub.constants.browser.setUp(browser.java:350)\r\n\tat stepDefs.BrowserSetUpAndTearDown.setUpBrowser(BrowserSetUpAndTearDown.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:91)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:128)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:113)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:200)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:153)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: cannot get automation extension\nfrom unknown error: page could not be found: chrome-extension://aapnijgdinlhnhlmodcfapnahmbfebeb/_generated_background_page.html\n  (Session info: chrome\u003d57.0.2987.110)\n  (Driver info: chromedriver\u003d2.26.436362 (5476ec6bf7ccbada1734a0cdec7d570bb042aa30),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.15 seconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027SUPERFAST\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.26.436362 (5476ec6bf7ccbada1734a0cdec7d570bb042aa30), userDataDir\u003dC:\\Users\\LIC~1.OSC\\AppData\\Local\\Temp\\scoped_dir3960_23001}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d57.0.2987.110, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: ff56a7207d2aff66cf1317bf79651987\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat com.vpcodingclub.constants.browser.setUp(browser.java:346)\r\n\t... 45 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#||||Please enter your email and password.|unsuccessfull login|"
    }
  ],
  "line": 14,
  "name": "Ingreso con credenciales validas o invalidas",
  "description": "",
  "id": "access-to-gamedb2;ingreso-con-credenciales-validas-o-invalidas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Navigate to gamedb2.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Presionamos login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Ingresamos email \"Oscar.duim@gmail.com\" y password \"abc\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Presionamos Submit login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Validamos que ingresamos a pagina con mensaje \"This email is not registered.\" y condicion \"unsuccessfull login\" y name \"Oscar\"",
  "matchedColumns": [
    2,
    3,
    4
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
  "status": "skipped"
});
formatter.match({
  "location": "AccessToSystemSteps.presionamos_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Oscar.duim@gmail.com",
      "offset": 18
    },
    {
      "val": "abc",
      "offset": 52
    }
  ],
  "location": "AccessToSystemSteps.ingresamos_email_y_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccessToSystemSteps.presionamos_Submit_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "This email is not registered.",
      "offset": 47
    },
    {
      "val": "unsuccessfull login",
      "offset": 91
    },
    {
      "val": "Oscar",
      "offset": 120
    }
  ],
  "location": "AccessToSystemSteps.validamos_que_ingresamos_a_pagina_con_mensaje_y_condicion_y_name(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11879022,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefs.BrowserSetUpAndTearDown.tearDown(BrowserSetUpAndTearDown.java:45)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:80)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:714)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:901)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1231)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:127)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:111)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:767)\r\n\tat org.testng.TestRunner.run(TestRunner.java:617)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:334)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:329)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:291)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:240)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1198)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1123)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:91)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:128)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:113)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:200)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:153)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
formatter.uri("SingUp.feature");
formatter.feature({
  "line": 1,
  "name": "Sing Up at GameDB2",
  "description": "",
  "id": "sing-up-at-gamedb2",
  "keyword": "Feature"
});
});