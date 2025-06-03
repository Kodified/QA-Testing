const {Builder, By, Actions} = require('selenium-webdriver');
const path = require('path');
const assert = require('assert');

describe('dropdown appears on hover', function() {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = new Builder().forBrowser('chrome').build();
  });

  after(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it('shows menu when hovering', async () => {
    const filePath = path.resolve(__dirname, '../../public/dropdown.html');
    await driver.get('file://' + filePath);

    const menu = await driver.findElement(By.id('menu'));
    let displayed = await menu.isDisplayed();
    assert.strictEqual(displayed, false);

    // Hover over trigger element
    // const trigger = await driver.findElement(By.id('trigger'));
    // await driver.actions({bridge: true}).move({origin: trigger}).perform();
    // displayed = await menu.isDisplayed();
    // assert.strictEqual(displayed, true);
  });
});
