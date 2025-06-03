const {Builder, By} = require('selenium-webdriver');
const path = require('path');
const assert = require('assert');

// Use the real API endpoint and verify that the page displays
// the returned user data.

describe('integration test with real API', function() {
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

  it('loads user data', async () => {
    const filePath = path.resolve(__dirname, '../../public/api.html');
    await driver.get('file://' + filePath);

    // Trigger the API request
    await driver.findElement(By.id('load-user')).click();
    const output = await driver.findElement(By.id('output')).getText();
    assert.notStrictEqual(output.trim(), '');
  });
});
