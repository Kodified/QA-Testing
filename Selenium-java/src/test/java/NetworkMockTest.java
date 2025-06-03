import org.junit.jupiter.api.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import java.nio.file.Paths;

public class NetworkMockTest {
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
    public void mockApiResponse() {
        String fileUrl = Paths.get("../public/api.html").toUri().toString();
        driver.get(fileUrl);

        // Intercept the network request by replacing fetch with a mocked
        // implementation that returns a fixed user object.
        ((JavascriptExecutor) driver).executeScript(
                "window.fetch = () => Promise.resolve({json: () => Promise.resolve({" +
                        "firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com'," +
                        "phone: '123', address: {address: '123 Main St', city: 'Metropolis'," +
                        "state: 'NY', country: 'USA'}, age: 30, gender: 'female'})});");

        driver.findElement(By.id("load-user")).click();
        WebElement output = driver.findElement(By.id("output"));
        Assertions.assertTrue(output.getText().contains("Jane Doe"));
    }
}
