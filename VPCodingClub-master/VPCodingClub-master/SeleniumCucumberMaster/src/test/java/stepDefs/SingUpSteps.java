package stepDefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static org.testng.Assert.assertEquals;

public class SingUpSteps {

    private WebDriver driver;
    private final String errorBorderColor = "rgb(169, 68, 66)";  // Border-Color en inputs y mensajes para casos erroneos debe ser Rojo!

    public SingUpSteps(BrowserSetUpAndTearDown bst) {
        this.driver = bst.driver;
    }

    @When("^Presionamos SingUp$")
    public void presionamos_SingUp() throws Throwable {
        WebElement SingUpRef = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[2]/li[1]/a"));
        SingUpRef.click();
    }

    @When("^Ingresamos name \"([^\"]*)\" email \"([^\"]*)\" password \"([^\"]*)\" y passwordConfirm \"([^\"]*)\"$")
    public void ingresamos_name_email_password_y_passwordConfirm(String _name, String _email, String _password, String _passwordConfirm) throws Throwable {

        WebElement name = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/input"));
        name.sendKeys(_name);
        WebElement email = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/input"));
        email.sendKeys(_email);
        WebElement password = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/input"));
        password.sendKeys(_password);
        WebElement passwordConfirm = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[4]/input"));
        passwordConfirm.sendKeys(_passwordConfirm);
    }

    @When("^Presionamos SingUpSubmit$")
    public void presionamos_SingUpSubmit() throws Throwable {
        WebElement SingUpSubmitRef = driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[5]/button"));
        SingUpSubmitRef.click();
    }

    @Then("^Validamos que ingresamos a pagina con mensaje \"([^\"]*)\"condicion \"([^\"]*)\" y name \"([^\"]*)\"$")
    public void validamos_que_ingresamos_a_pagina_con_mensaje_condicion_y_name(String message, String condition, String name) throws Throwable {
        Thread.sleep(5000);
        switch (condition){
            case "unsuccessfull singUp":
                switch (message){
                    case "A name is required":
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/p")).getText(),message);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/input")).getCssValue("border-color"),this.errorBorderColor);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/p")).getCssValue("border-color"),this.errorBorderColor);
                        //assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[1]/label")).getCssValue("border-color"),this.errorBorderColor);
                        break;
                    case "What's your email address?":
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/p[2]")).getText(),message);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/input")).getCssValue("border-color"),this.errorBorderColor);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/p[2]")).getCssValue("border-color"),this.errorBorderColor);
                        break;
                    case "Password must be at least 3 characters.":
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/p[1]")).getText(),message);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/input")).getCssValue("border-color"),this.errorBorderColor);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[3]/p[1]")).getCssValue("border-color"),this.errorBorderColor);
                        break;
                    case "confirmPassword cannot be empty":
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[4]/input")).getCssValue("border-color"),this.errorBorderColor);
                        break;
                    case "The specified email address is already in use.":
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/p[3]")).getText(),message);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/input")).getCssValue("border-color"),this.errorBorderColor);
                        assertEquals(driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/form/div[2]/p[3]")).getCssValue("border-color"),this.errorBorderColor);
                        break;
                }
                break;
            case "successfull singUp":
                assertEquals("https://gamedb2.herokuapp.com/",driver.getCurrentUrl());
                assertEquals("Hello "+name,driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[2]/li[3]/p")).getText());
                break;
        }
    }
}
