const { test, expect } = require('@playwright/test');
const path = require('path');

// Demonstrate network request interception by mocking the response
// from the user API so the page renders predictable data.

test('mock API response', async ({ page }) => {
  const filePath = path.join(__dirname, '../../public/api.html');
  await page.goto('file://' + filePath);

  // Use page.route to intercept the request and return a mocked response
  await page.route('https://dummyjson.com/users/1', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
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

  await page.click('#load-user');
  await expect(page.locator('#output')).toContainText('Jane Doe');
});
