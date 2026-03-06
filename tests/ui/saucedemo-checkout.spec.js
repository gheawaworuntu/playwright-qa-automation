import { expect, test } from '@playwright/test';
import { ProductPage } from "../../pages/productPage";
import { LoginPage } from "../../pages/loginPage";
import { CheckoutPage } from "../../pages/checkoutPage";
import { CartPage } from "../../pages/cartPage";
import { checkoutNegativeData } from '../../test-data/checkoutNegativeData';

test.describe('Checkout', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await productPage.addProductByName('Sauce Labs Bike Light');
        await productPage.goToCart();
        await cartPage.clickCheckout();
    })

    checkoutNegativeData.forEach(data => {
        test(`${data.testName} - checkout validaton form`, async ({ page }) => {
            const checkoutPage = new CheckoutPage(page);
            await checkoutPage.fillInformation(data.firstname, data.lastname, data.postalcode);
            await checkoutPage.continueOrder();
            await expect(checkoutPage.getErrorMessage()).toContainText(data.error)
        })
    })
})