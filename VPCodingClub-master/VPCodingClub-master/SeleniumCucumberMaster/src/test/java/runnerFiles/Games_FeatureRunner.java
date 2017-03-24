package runnerFiles;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = "src/test/java/features/Games",glue = "stepDefs",tags = {"~@ignore"},
        plugin = {"pretty","json:Automation Reports/Latest Results/Json Reports/Games.json","html:Automation Reports/Latest Results/Html Reports/Games"})
public class Games_FeatureRunner extends AbstractTestNGCucumberTests {



}
