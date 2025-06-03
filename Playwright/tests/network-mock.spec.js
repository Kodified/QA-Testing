const { test, expect } = require('@playwright/test');
const path = require('path');

// TODO: Intercept and mock the API response according to CandidateEvaluation.md

test('mock API response', async ({ page }) => {
  const filePath = path.join(__dirname, '../../public/api.html');
  await page.goto('file://' + filePath);

  // Use page.route to intercept the request and return a mocked response
  // await page.route('https://randomuser.me/api/', async route => {
  //   await route.fulfill({
  //     status: 200,
  //     contentType: 'application/json',
  //     body: JSON.stringify({ results: [{ name: { first: 'Jane', last: 'Doe' }, email: 'jane.doe@example.com' }] })
  //   });
  // });

  // await page.click('#load-user');
  // await expect(page.locator('#output')).toContainText('Jane Doe');
});
