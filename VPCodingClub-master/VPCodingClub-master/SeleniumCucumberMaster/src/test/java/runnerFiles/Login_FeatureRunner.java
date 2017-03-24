package runnerFiles;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/java/features/Login",glue = "stepDefs",tags = {"~@ignore"},
plugin = {"pretty","json:Automation Reports/Latest Results/Json Reports/Test.json","html:Automation Reports/Latest Results/Html Reports/Test"})
public class Login_FeatureRunner extends AbstractTestNGCucumberTests {

}
