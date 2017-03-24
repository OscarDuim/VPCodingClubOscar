package stepDefs;

import org.openqa.selenium.NoSuchElementException;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static org.testng.Assert.assertFalse;
import static org.testng.Assert.assertTrue;

public class DeleteGames {
    private WebDriver driver;
    public DeleteGames(BrowserSetUpAndTearDown bst) {
        this.driver = bst.driver;
    }

    @When("^Borramos Game con atributos Name \"([^\"]*)\" Platform \"([^\"]*)\" y Genre \"([^\"]*)\"$")
    public void borramos_Game_con_atributos_Name_Platform_y_Genre(String _nameGame, String _platformGame, String _genreGame) throws Throwable {
        boolean isGamePresent = verifyElement("//table[@class='table table-striped']/tbody/tr/td[text()='"+_nameGame+"']/following-sibling::td/a[text()='"+_platformGame+"']/../following-sibling::td/a[text()='"+_genreGame+"']");
        if(isGamePresent){
            WebElement rowGame = driver.findElement(By.xpath("//table[@class='table table-striped']/tbody/tr/td[text()='"+_nameGame+"']/following-sibling::td/a[text()='"+_platformGame+"']/../following-sibling::td/a[text()='"+_genreGame+"']/../.."));
            WebElement DeleteButton = rowGame.findElement(By.xpath("td/button[text()='Delete']"));
            DeleteButton.click();
            Thread.sleep(2000);
            isGamePresent =     verifyElement("//table[@class='table table-striped']/tbody/tr/td[text()='"+_nameGame+"']/following-sibling::td/a[text()='"+_platformGame+"']/../following-sibling::td/a[text()='"+_genreGame+"']");
            assertFalse(isGamePresent, "Game name has not been deleted");
        }
        else
            assertTrue(false, "Game cannot be deleted because it was not found...");
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
