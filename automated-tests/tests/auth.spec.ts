import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:5173';

test('TC01 - Register with valid details', async ({ page }) => {
  await page.goto(`${baseUrl}/signup`);
  await page.fill('input[name="full_name"]', 'User 2');
  await page.fill('input[name="email"]', 'user_2@example.com');
  await page.fill('input[name="password"]', 'newpassword123@');
  await page.fill('input[name="confirm_password"]', 'newpassword123@');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/login/);
});


test('TC02 - Register with invalid email format', async ({ page }) => {
  await page.goto(`${baseUrl}/signup`);
  await page.fill('input[name="full_name"]', 'User 3');
  await page.fill('input[name="email"]', 'wrongemail');
  await page.fill('input[name="password"]', 'SecurePass123@');
  await page.fill('input[name="confirm_password"]', 'SecurePass123@');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Invalid email')).toBeVisible(); 
});


test('TC05 - Access protected page without login', async ({ page }) => {
  await page.goto(`${baseUrl}/items`);
  await expect(page).toHaveURL(/login/); // Should redirect to login
});