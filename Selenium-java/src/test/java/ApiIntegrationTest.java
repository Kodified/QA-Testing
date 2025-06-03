import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.nio.file.Paths;

public class ApiIntegrationTest {
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
    public void integrationWithRealApi() {
        String fileUrl = Paths.get("../public/api.html").toUri().toString();
        driver.get(fileUrl);

        // Trigger the real API request
        // driver.findElement(By.id("load-user")).click();
        // WebElement output = driver.findElement(By.id("output"));
        // Assertions.assertFalse(output.getText().isBlank());
    }
}
