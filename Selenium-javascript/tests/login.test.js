const {Builder, By} = require('selenium-webdriver');
const path = require('path');
const assert = require('assert');

describe('end-to-end login', function() {
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

  it('logs in successfully', async () => {
    const filePath = path.resolve(__dirname, '../../public/login.html');
    await driver.get('file://' + filePath);

    // Fill in the username and password fields
    await driver.findElement(By.id('username')).sendKeys('emilys');
    await driver.findElement(By.id('password')).sendKeys('emilyspass');
    await driver.findElement(By.id('submit')).click();

    // Verify welcome message
    const text = await driver.findElement(By.id('welcome-text')).getText();
    assert.strictEqual(text, 'Welcome back, Emily!');
  });
});
