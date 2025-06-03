import pathlib
from selenium import webdriver
from selenium.webdriver.common.by import By

# Intercept the network request by overriding `fetch` on the page so
# that a mocked user object is returned.

def test_mock_api_response():
    file_url = pathlib.Path("../public/api.html").resolve().as_uri()
    driver = webdriver.Chrome()
    try:
        driver.get(file_url)

        # Use script execution to mock the request
        driver.execute_script(
            "window.fetch = () => Promise.resolve({json: () => Promise.resolve({"
            "firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com',"
            "phone: '123', address: {address: '123 Main St', city: 'Metropolis',"
            "state: 'NY', country: 'USA'}, age: 30, gender: 'female'})});"
        )

        driver.find_element(By.ID, "load-user").click()
        output = driver.find_element(By.ID, "output")
        assert "Jane Doe" in output.text
    finally:
        driver.quit()
