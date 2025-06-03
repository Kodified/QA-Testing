import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.nio.file.Paths;

public class LoginTest {
    private WebDriver driver;

    @BeforeEach
    public void setUp() {
        // TODO: configure WebDriver location or use WebDriverManager
        driver = new ChromeDriver();
    }

    @AfterEach
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void endToEndLogin() {
        String fileUrl = Paths.get("../public/login.html").toUri().toString();
        driver.get(fileUrl);

        // TODO: Fill in username and password fields
        // driver.findElement(By.id("username")).sendKeys("your-username");
        // driver.findElement(By.id("password")).sendKeys("your-password");
        // driver.findElement(By.id("submit")).click();

        // TODO: Assert welcome message is displayed
        // WebElement message = driver.findElement(By.id("welcome-text"));
        // Assertions.assertEquals("Welcome back, your-username!", message.getText());
    }
}
