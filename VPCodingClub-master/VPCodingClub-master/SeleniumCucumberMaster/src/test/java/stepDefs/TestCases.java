package stepDefs;


import java.util.concurrent.TimeUnit;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import com.vpcodingclub.constants.WebDriverTest;
import org.openqa.selenium.WebElement;
import stepDefs.BrowserSetUpAndTearDown;
import cucumber.api.java.en.Given;

import static org.testng.Assert.assertEquals;


public class TestCases extends WebDriverTest {

    private WebDriver driver;

    public TestCases(BrowserSetUpAndTearDown bst) {
        this.driver = bst.driver;
    }
    
//###########################################################################################

    @Given("^Navigate to phptravels$")
    public void navigate_to_google_site() throws Throwable {

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://phptravels.net/");
        Thread.sleep(2000);



       // driver.close();
    }

    @When("^Accesamos a mi cuenta$")
    public void accesamos_a_mi_cuenta() throws Throwable {
        WebElement MyAccount = driver.findElement(By.xpath("html/body/div[2]/div/div/div[2]/ul[2]/li[2]/a"));
        MyAccount.click();
        WebElement Login = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[2]/li[2]/a"));
        Login.click();
    }

    @And("^Ingresamos el nombre del usuario y contrasena$")
    public void ingresamos_el_nombre_del_usuario_y_contrasena() throws Throwable {
        WebElement Email = driver.findElement(By.xpath(".//*[@id='loginfrm']/div[4]/div/div[1]/input"));
        Email.sendKeys("oscar.duim@gmail.com");
        WebElement pass = driver.findElement(By.xpath(".//*[@id='loginfrm']/div[4]/div/div[2]/input"));
        pass.sendKeys("1234");
    }

    @And("^Presionamos Submit$")
    public void presionamos_Submit() throws Throwable {
        WebElement LoginButton = driver.findElement(By.xpath(".//*[@id='loginfrm']/div[4]/button"));
        LoginButton.click();
    }

    @Then("^Validamos que ingresamos a la pagina$")
    public void validamos_que_ingresamos_a_la_pagina(/*String url_expected*/) throws Throwable {
        assertEquals(driver.findElement(By.xpath(".//*[@id='loginfrm']/div[5]/div[2]/a")).getText(),"Forget Password");
        //driver.close();
        //assertEquals(driver.getCurrentUrl(),url_expected);
    }
}