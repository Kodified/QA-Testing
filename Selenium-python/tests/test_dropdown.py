import pathlib
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

# Validate that the dropdown menu becomes visible only after hovering
# over the trigger element.

def test_dropdown_appears_on_hover():
    file_url = pathlib.Path("../public/dropdown.html").resolve().as_uri()
    driver = webdriver.Chrome()
    try:
        driver.get(file_url)

        menu = driver.find_element(By.ID, "menu")
        assert not menu.is_displayed()

        # Hover over the trigger element
        trigger = driver.find_element(By.ID, "trigger")
        ActionChains(driver).move_to_element(trigger).perform()
        assert menu.is_displayed()
    finally:
        driver.quit()
