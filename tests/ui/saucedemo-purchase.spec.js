import { ProductPage } from "../../pages/productPage";
import { LoginPage } from "../../pages/loginPage";
import { expect, test } from '@playwright/test';

test.describe('Purchase products in Cart', () => {
    // harus berhasil login sebelum bisa purchase product
    test.beforeEach( async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('User can buy products from cart', async ({page}) => {
        const productPage = new ProductPage(page);

        //tambah produk ke cart
        await productPage.addProductByName('Sauce Labs Backpack')
        await productPage.addProductByName('Sauce Labs Fleece Jacket')
    })
})