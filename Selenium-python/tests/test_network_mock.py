import pathlib
from selenium import webdriver
from selenium.webdriver.common.by import By

# TODO: Intercept and mock the API response according to CandidateEvaluation.md

def test_mock_api_response():
    file_url = pathlib.Path("../public/api.html").resolve().as_uri()
    driver = webdriver.Chrome()
    try:
        driver.get(file_url)

        # Use a proxy or CDP commands to mock the request
        # driver.find_element(By.ID, "load-user").click()
        # output = driver.find_element(By.ID, "output")
        # assert "Jane Doe" in output.text
    finally:
        driver.quit()
