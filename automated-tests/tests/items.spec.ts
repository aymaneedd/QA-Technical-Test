import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:5173';

const login = async (page) => {
    await page.goto(`${baseUrl}/login`);
    await page.fill('input[name="username"]', 'admin@example.com');
    await page.fill('input[name="password"]', 'changethis');
    await page.click('button[type="submit"]');
};

test('TC07 - Create item with valid data', async ({ page }) => {
    await login(page);
    await page.click('text=Items');
    await page.click('text=Add Item');
    await page.fill('input[name="title"]', 'Automated Item 3 Title');
    await page.fill('input[name="description"]', 'Automated Item 3 description');
    await page.click('button[type="submit"]');
});

test('TC08 - Edit item details', async ({ page }) => {
    await login(page);
    await page.click('text=Items');
    // Find the row that contains the target item
    const row = page.locator('tr', { hasText: 'Automated Item 2 Title' });
    // Click the "Actions" (3-dot) button inside that row
    await row.locator('button').first().click();
    // Click "Edit Item" from the menu
    await page.click('text=Edit Item');
    // Fill the form and submit
    await page.fill('input[name="title"]', 'Automated Updated Item 2 Title');
    await page.fill('input[name="description"]', 'Automated Updated Item 2 Description');
    await page.click('button[type="submit"]');
});

test('TC08 - Delete item details', async ({ page }) => {
    await login(page);
    await page.click('text=Items');
    const row = page.locator('tr', { hasText: 'item 1' });
    await row.locator('button').first().click();
    await page.click('text=Delete Item');
    await page.click('button[type="submit"]');
});

