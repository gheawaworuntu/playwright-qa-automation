import { test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';

test.describe('SauceDemo app Login Tests', () => {
    test('Invalid login shows error', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wronguser', 'wrongpass');
        await loginPage.showErrorMessage('Username and password do not match any user in this service')
    });

    test('Valid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.showSuccessLogin();
    });
})