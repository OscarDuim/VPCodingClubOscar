package stepDefs;
import org.openqa.selenium.NoSuchElementException;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import static org.testng.Assert.assertTrue;

public class UpdateGames {
    private WebDriver driver;
    public UpdateGames(BrowserSetUpAndTearDown bst) {
        this.driver = bst.driver;
    }

    @When("^actualizamos Game con atributos Name \"([^\"]*)\" Platform \"([^\"]*)\" y Genre \"([^\"]*)\" por atributos NewName\"([^\"]*)\" NewPlataform\"([^\"]*)\" NewGenre\"([^\"]*)\"$")
    public void actualizamos_Game_con_atributos_Name_Platform_y_Genre_por_atributos_NewName_NewPlataform_NewGenre(String _nameGame, String _platformGame, String _genreGame, String _newNameGame, String _newPlatformGame, String _newGenreGame) throws Throwable {
        boolean isGamePresent = verifyElement("//table[@class='table table-striped']/tbody/tr/td[text()='"+_nameGame+"']/following-sibling::td/a[text()='"+_platformGame+"']/../following-sibling::td/a[text()='"+_genreGame+"']");
        if(isGamePresent){
            boolean isNewGamePresent;
            WebElement rowGame = driver.findElement(By.xpath("//table[@class='table table-striped']/tbody/tr/td[text()='"+_nameGame+"']/following-sibling::td/a[text()='"+_platformGame+"']/../following-sibling::td/a[text()='"+_genreGame+"']/../.."));
            WebElement editButton = rowGame.findElement(By.xpath("td/button[text()='Edit']"));
            editButton.click();
            WebElement inputGameName =      rowGame.findElement(By.xpath("td[2]/input"));
            WebElement inputGamePlatform =  rowGame.findElement(By.xpath("td[4]/input"));
            WebElement inputGameGenre =     rowGame.findElement(By.xpath("td[6]/input"));
            inputGameName.clear();
            inputGameName.sendKeys(_newNameGame);
            inputGamePlatform.clear();
            inputGamePlatform.sendKeys(_newPlatformGame);
            inputGameGenre.clear();
            inputGameGenre.sendKeys(_newGenreGame);
            WebElement saveButton = rowGame.findElement(By.xpath("td/button[text()='Save']"));
            saveButton.click();
            Thread.sleep(2000);
            isNewGamePresent =      verifyElement("//table[@class='table table-striped']/tbody/tr/td[text()='"+_newNameGame+"']/following-sibling::td/a[text()='"+_newPlatformGame+"']/../following-sibling::td/a[text()='"+_newGenreGame+"']");
            assertTrue(isNewGamePresent, "Game has not been updated");
        }
        else
            assertTrue(false, "Game cannot be updated because it was not found...");
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
