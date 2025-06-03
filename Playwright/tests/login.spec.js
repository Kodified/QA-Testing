const { test, expect } = require('@playwright/test');
const path = require('path');

// Complete the login test by filling in the demo credentials and
// verifying the success message that appears after the API request

test('end-to-end login', async ({ page }) => {
  const filePath = path.join(__dirname, '../../public/login.html');
  await page.goto('file://' + filePath);

  // Fill in the username and password fields
  await page.fill('#username', 'emilys');
  await page.fill('#password', 'emilyspass');
  await page.click('#submit');

  // Expect a welcome message to appear
  await expect(page.locator('#welcome-text')).toHaveText('Welcome back, Emily!');
});
