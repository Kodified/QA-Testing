const { test, expect } = require('@playwright/test');
const path = require('path');

// Use the real API endpoint provided by the page and verify that data
// from the request is rendered in the output element.

test('integration test with real API', async ({ page }) => {
  const filePath = path.join(__dirname, '../../public/api.html');
  await page.goto('file://' + filePath);

  // Trigger the API request
  await page.click('#load-user');

  // Expect the output to contain data from the API
  await expect(page.locator('#output')).not.toBeEmpty();
});
