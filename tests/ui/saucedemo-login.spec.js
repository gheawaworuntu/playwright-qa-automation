import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';
import { loginNegativeData } from '../../test-data/loginNegativeData.js';

test.describe('SauceDemo app Login Tests', () => {
    //negative case
    loginNegativeData.forEach(data => {
        test(`${data.testName} - negative case`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.login(data.username, data.password);
            await expect(loginPage.getErrorMessage()).toContainText(data.error);

            //validasi link url tidak berubah
            await expect(page).toHaveURL('https://www.saucedemo.com/');

            //validasi tidak ada session cookie yang dibuat
            //const cookies = await page.context().cookies();
            //expect(cookies.length).toBe(0);
        })
    })

    //positive case
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