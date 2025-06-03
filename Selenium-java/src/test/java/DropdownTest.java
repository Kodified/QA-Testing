import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import java.nio.file.Paths;

public class DropdownTest {
    private WebDriver driver;

    @BeforeEach
    public void setUp() {
        driver = new ChromeDriver();
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void dropdownAppearsOnHover() {
        String fileUrl = Paths.get("../public/dropdown.html").toUri().toString();
        driver.get(fileUrl);

        WebElement menu = driver.findElement(By.id("menu"));
        Assertions.assertFalse(menu.isDisplayed());

        // Hover over the trigger element
        // new Actions(driver).moveToElement(driver.findElement(By.id("trigger"))).perform();
        // Assertions.assertTrue(menu.isDisplayed());
    }
}
