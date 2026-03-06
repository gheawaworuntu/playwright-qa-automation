import { expect, test } from '@playwright/test';
import { ProductPage } from '../../pages/productPage';
import { LoginPage } from '../../pages/loginPage';

test('Logout from website', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productPage.logout();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
})