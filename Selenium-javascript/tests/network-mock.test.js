const {Builder, By} = require('selenium-webdriver');
const path = require('path');
const assert = require('assert');

// TODO: Intercept and mock the API response according to CandidateEvaluation.md

describe('mock API response', function() {
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

  it('displays mocked data', async () => {
    const filePath = path.resolve(__dirname, '../../public/api.html');
    await driver.get('file://' + filePath);

    // Use browser devtools protocol or proxy to mock the request
    // await driver.findElement(By.id('load-user')).click();
    // const output = await driver.findElement(By.id('output')).getText();
    // assert(output.includes('Jane Doe'));
  });
});
