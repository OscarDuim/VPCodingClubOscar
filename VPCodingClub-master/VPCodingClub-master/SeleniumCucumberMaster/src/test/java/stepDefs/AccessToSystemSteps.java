package stepDefs;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.NoSuchElementException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.vpcodingclub.constants.WebDriverTest;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

public class AccessToSystemSteps extends WebDriverTest {

    private WebDriver driver;

    public AccessToSystemSteps(BrowserSetUpAndTearDown bst) {
        this.driver = bst.driver;
    }
        @Given("^Navigate to gamedb(\\d+)\\.herokuapp\\.com$")
        public void navigate_to_gamedb_herokuapp_com(int arg1) throws Throwable {
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.get("https://gamedb2.herokuapp.com/");
            Thread.sleep(2000);
        }

        @When("^Presionamos login$")
        public void presionamos_login() throws Throwable {
            WebElement LoginRef = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[2]/li[2]/a"));
            LoginRef.click();
        }

        @When("^Ingresamos email \"([^\"]*)\" y password \"([^\"]*)\"$")
        public void ingresamos_email_y_password(String _email, String _password) throws Throwable {
            WebElement email = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/input"));
            email.sendKeys(_email);
            WebElement password = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/input"));
            password.sendKeys(_password);
        }

        @When("^Presionamos Submit login$")
        public void presionamos_Submit_login() throws Throwable {
            WebElement LoginButton = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[4]/button"));
            LoginButton.click();
        }

    @Then("^Validamos que ingresamos a pagina con mensaje \"([^\"]*)\" y condicion \"([^\"]*)\" y name \"([^\"]*)\"$")
    public void validamos_que_ingresamos_a_pagina_con_mensaje_y_condicion_y_name(String message, String condition, String name) throws Throwable {
            Thread.sleep(2000);
            switch (condition){
                case "unsuccessfull login":
                    switch(message) {
                        case "Please enter your email and password.":
                            assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/p[1]")).getText(), message);
                            break;
                        case "This email is not registered.":
                            assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/p[3]")).getText(), message);
                            break;
                        case "This password is not correct.":
                            assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/p[3]")).getText(), message);
                            break;
                    }
                break;
                case "successfull login":
                    assertEquals("https://gamedb2.herokuapp.com/",driver.getCurrentUrl());
                    assertEquals("Hello "+name,driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[2]/li[3]/p")).getText());
                break;
            }
        }
    @Then("^Validamos en HomePage\"([^\"]*)\" los HomeWebElements pageName\"([^\"]*)\" gamesModule\"([^\"]*)\" logoutLabel\"([^\"]*)\" angularVersion\"([^\"]*)\" footerLinks \"([^\"]*)\"$")
    public void validamos_en_HomePage_los_HomeWebElements_pageName_gamesModule_logoutLabel_angularVersion_footerLinks(String _currentPage,String _pageName, String _gamesModule, String _logoutLabel, String _angularVersion, String _footerLinks) throws Throwable {
        if (_currentPage.equalsIgnoreCase("HomePage")){
            WebElement pageName,gamesModule,logoutLabel,footerLinks;
            boolean angularVersion;
            pageName = driver.findElement(By.xpath("html/body/navbar/div/div/div[1]/a"));
            gamesModule = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[1]/li[3]/a"));
            logoutLabel = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[2]/li[5]/a"));
            angularVersion = verifyElement("html/body/footer/div/p[text()[contains(.,'"+_angularVersion+"')]]");

            String[] separatedFooterLinks = _footerLinks.split(",");
            boolean isFooterLinkPresent;
            for (String footerLink : separatedFooterLinks) {
                isFooterLinkPresent = verifyElement("html/body/footer/div/p/a[text()='"+footerLink+"']");
                assertTrue(isFooterLinkPresent, footerLink+" has not been found");

            }
            assertEquals(pageName.getText(),_pageName);
            assertEquals(gamesModule.getText(),_gamesModule);
            assertEquals(logoutLabel.getText(),_logoutLabel);
            assertTrue(angularVersion,"Angular version footer has not been found");
        }
    }

    @Then("^Validamos el logout con name \"([^\"]*)\"$")
    public void validamos_el_logout_con_name(String _name) throws Throwable {
        if (!_name.isEmpty()) {
            WebElement logoutLabel = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul/li/a[contains(.,'Logout')]"));
            if(logoutLabel.isDisplayed()) {
                logoutLabel.click();
                Thread.sleep(2000);
                WebElement SignUpLink = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul/li/a[contains(.,'Sign up')]"));
                WebElement LoginLink = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul/li/a[contains(.,'Login')]"));

                boolean isProfileFound = verifyElement(".//*[@id='navbar-main']/ul/li/p[contains(.,'" + _name + "')]");
                boolean isLogoutLinkFound = logoutLabel.isDisplayed();
                boolean isSignUpLinkFound = SignUpLink.isDisplayed();
                boolean isLoginLinkFound = LoginLink.isDisplayed();

                assertFalse(isProfileFound, "Hello " + _name + " must not be present after logout");
                assertFalse(isLogoutLinkFound, "Logout link must not be present after logout");
                assertTrue(isSignUpLinkFound, "Sign Up Link must be present after logout");
                assertTrue(isLoginLinkFound, "Login Link must be present after logout");
            }
        }
    }

    private boolean verifyElement(String locator) throws Exception {
        try {
            driver.findElement(By.xpath(locator));
            System.out.println("Element is Present");
            return true;

        } catch (NoSuchElementException e) {
            System.out.println("Element is Not Present");
            return false;
        }
    }
}


