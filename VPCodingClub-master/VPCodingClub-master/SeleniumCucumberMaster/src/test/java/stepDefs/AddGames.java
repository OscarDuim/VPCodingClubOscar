package stepDefs;

import org.openqa.selenium.NoSuchElementException;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static org.testng.Assert.assertTrue;

public class AddGames {
    private WebDriver driver;
    public AddGames(BrowserSetUpAndTearDown bst) {
        this.driver = bst.driver;
    }

    @When("^Presionamos Games$")
    public void presionamos_Games() throws Throwable {
        Thread.sleep(2000);
        WebElement GamesRef = driver.findElement(By.xpath(".//*[@id='navbar-main']/ul[1]/li[3]/a"));
        GamesRef.click();
    }

    @When("^Ingresamos Name \"([^\"]*)\" Platform \"([^\"]*)\" y Genre \"([^\"]*)\"$")
    public void ingresamos_Name_Platform_y_Genre(String _nameGame, String _platformGame, String _genreGame) throws Throwable {
        boolean isGamePresent;
        WebElement name = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[1]/input"));
        name.sendKeys(_nameGame);
        WebElement platform = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[2]/input"));
        platform.sendKeys(_platformGame);
        WebElement genre = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[3]/input"));
        genre.sendKeys(_genreGame);
        WebElement AddButon = driver.findElement(By.xpath("html/body/div[1]/div/table/tbody[2]/tr/td[4]/button"));
        AddButon.click();
        Thread.sleep(2000);
        isGamePresent = verifyElement("//table[@class='table table-striped']/tbody/tr/td[text()='"+_nameGame+"']/following-sibling::td/a[text()='"+_platformGame+"']/../following-sibling::td/a[text()='"+_genreGame+"']");
        assertTrue(isGamePresent, "Game has not been added");
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