import { test, expect } from '@playwright/test';

test('Product Search + Add to cart', async ({ page }) => {
  // Go to the url
  await page.goto('https://demo-shop.gigalogy.com.bd/');
  // wait for 2 seconds
  await page.waitForTimeout(2000);


  // Close popup by clicking "スキップ" (Skip)
  await page.getByRole('button', { name: 'スキップ' }).click();
  // wait for 2 seconds
  await page.waitForTimeout(2000);


  // Search for a product "t-shirt"
  const searchBox = page.getByRole('textbox', { name: 'search' });
  await searchBox.fill('t-shirt');
  // wait for 2 seconds
  await page.waitForTimeout(2000);


  // Click on the search button
  await page.locator('#banner').getByText('Search', { exact: true }).click();
  // wait for 2 seconds
  await page.waitForTimeout(2000);


  // Click on the product image
  await page.getByRole('img', { name: '【SALE／40%OFF】agnes b. FEMME' }).click();
  // wait for 2 seconds
  await page.waitForTimeout(2000);

  
  // Add to cart
  await page.getByRole('button', { name: 'Add To Shopping Cart' }).click();
  // wait for 2 seconds
  await page.waitForTimeout(2000);


  // close the modal
  await page.keyboard.press('Escape');
  // wait for 2 seconds
  await page.waitForTimeout(2000);


  // open cart
  await page.getByRole('button', { name: 'Item ¥7,920' }).click();
  // wait for 2 seconds
  await page.waitForTimeout(2000);

  
  // Assertion: confirm product added to cart
  const productCount = page.locator('div').filter({ hasText: /^1 Item$/ })
  await expect(productCount).toHaveText('1 Item');
  


  // To run this specific test file in headed mode for chromium browser, use the command below in terminal:
  //npx playwright test --project=chromium --headed

});
