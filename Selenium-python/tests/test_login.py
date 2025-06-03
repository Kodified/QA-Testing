import pathlib
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

# TODO: Complete the login test according to CandidateEvaluation.md

def test_end_to_end_login(tmp_path):
    file_url = pathlib.Path("../public/login.html").resolve().as_uri()
    driver = webdriver.Chrome()
    try:
        driver.get(file_url)

        # Fill in the username and password fields
        # driver.find_element(By.ID, "username").send_keys("your-username")
        # driver.find_element(By.ID, "password").send_keys("your-password")
        # driver.find_element(By.ID, "submit").click()

        # Expect a welcome message to appear
        # message = driver.find_element(By.ID, "welcome-text")
        # assert message.text == "Welcome back, your-username!"
    finally:
        driver.quit()
