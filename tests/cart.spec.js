import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('Cart interaction works', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.addToCart();

  // Optional: open cart to validate UI
  await home.openCart();

  // You can enhance later with cart count assertion
});