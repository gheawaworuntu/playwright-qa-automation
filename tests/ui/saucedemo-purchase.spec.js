import { ProductPage } from "../../pages/productPage";
import { LoginPage } from "../../pages/loginPage";
import { expect, test } from '@playwright/test';

test.describe('Complete purchase flow', () => {
    // harus berhasil login sebelum bisa purchase product
    test.beforeEach( async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    const products = [
        'Sauce Labs Backpack',
        'Sauce Labs Fleece Jacket'
    ];
})