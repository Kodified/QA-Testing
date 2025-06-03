const {Builder, By} = require('selenium-webdriver');
const path = require('path');
const assert = require('assert');

// Intercept the network request on the page and return mocked data so the
// UI shows predictable output.

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

    // Mock the fetch call on the page by overriding window.fetch
    await driver.executeScript(() => {
      window.fetch = () => Promise.resolve({
        json: () => Promise.resolve({
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          phone: '123',
          address: { address: '123 Main St', city: 'Metropolis', state: 'NY', country: 'USA' },
          age: 30,
          gender: 'female'
        })
      });
    });

    await driver.findElement(By.id('load-user')).click();
    const output = await driver.findElement(By.id('output')).getText();
    assert(output.includes('Jane Doe'));
  });
});
