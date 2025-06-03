import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.nio.file.Paths;

public class LoginTest {
    private WebDriver driver;

    @BeforeEach
    public void setUp() {
        // Instantiate the ChromeDriver. In a real project you might
        // configure WebDriverManager instead of hard coding the binary.
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

        // Fill in username and password fields
        driver.findElement(By.id("username")).sendKeys("emilys");
        driver.findElement(By.id("password")).sendKeys("emilyspass");
        driver.findElement(By.id("submit")).click();

        // Assert welcome message is displayed
        WebElement message = driver.findElement(By.id("welcome-text"));
        Assertions.assertEquals("Welcome back, Emily!", message.getText());
    }
}
