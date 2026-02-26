import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';

test.describe('SauceDemo app Login Tests', () => {
    test('Wrong password - negative case', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'wrongpass');
        await expect(loginPage.getErrorMessage()).toContainText('Username and password do not match any user in this service')

        //validasi link url tidak berubah
        await expect(page).toHaveURL('https://www.saucedemo.com/');

        //validasi tidak ada session cookie yang dibuat
        const cookies = await page.context().cookies();
        expect(cookies.length).toBe(0);
    });

    test('Wrong username - negative case', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('wrongusername', 'secret_sauce');
        await expect(loginPage.getErrorMessage()).toContainText('Username and password do not match any user in this service');
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    test('Empty username - negative case', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', 'secret_sauce');
        await expect(loginPage.getErrorMessage()).toContainText('Username is required')
        await expect(page).toHaveURL('https://www.saucedemo.com/');

    });

    test('Empty password - negative case', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', '');
        await expect(loginPage.getErrorMessage()).toContainText('Password is required')
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    test('Both empty - negative case', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '');
        await expect(loginPage.getErrorMessage()).toContainText('Username is required')
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    test('Locked user - negative case', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.getErrorMessage()).toContainText('Sorry, this user has been locked out')
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    })

    test('Valid login - positive case', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page).toHaveTitle('Swag Labs');
        
        //cek total produk pada web ada 6
        const products = page.locator('.inventory_item');
        await expect(products).toHaveCount(6); 

        //cek element visible
        await expect(page.locator('.inventory_list')).toBeVisible();
    });
})