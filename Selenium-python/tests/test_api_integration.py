import pathlib
from selenium import webdriver
from selenium.webdriver.common.by import By

# TODO: Use the real API endpoint and verify UI updates

def test_integration_with_real_api():
    file_url = pathlib.Path("../public/api.html").resolve().as_uri()
    driver = webdriver.Chrome()
    try:
        driver.get(file_url)

        # Trigger the API request
        # driver.find_element(By.ID, "load-user").click()
        # output = driver.find_element(By.ID, "output")
        # assert output.text.strip() != ""
    finally:
        driver.quit()
