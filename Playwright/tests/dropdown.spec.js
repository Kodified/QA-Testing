const { test, expect } = require('@playwright/test');
const path = require('path');

// Validate that the dropdown menu is hidden by default and becomes
// visible when hovering over the trigger element.

test('dropdown appears on hover', async ({ page }) => {
  const filePath = path.join(__dirname, '../../public/dropdown.html');
  await page.goto('file://' + filePath);

  const menu = page.locator('#menu');
  await expect(menu).toBeHidden();

  // Hover over the trigger element
  await page.hover('#trigger');
  await expect(menu).toBeVisible();
});
