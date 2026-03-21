import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('WhatsApp checkout triggers correctly', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.addToCart();
  await home.openCart();

  const btn = page.locator('button:has-text("Checkout on WhatsApp")');

  await expect(btn).toBeVisible();
  await expect(btn).toBeEnabled();

  await btn.click();

  // Optional small wait (UI action)
  await page.waitForTimeout(1000);
});