import { ProductPage } from "../../pages/productPage";
import { LoginPage } from "../../pages/loginPage";
import { expect, test } from '@playwright/test';
import { CheckoutPage } from "../../pages/checkoutPage";
import { CheckoutOverviewPage } from "../../pages/checkoutOverviewPage";
import { CheckoutCompletePage } from "../../pages/checkoutCompletePage";
import { CartPage } from "../../pages/cartPage";


test.describe('Purchase flow', () => {
    // harus berhasil login sebelum bisa purchase product
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('Complete purchase flow', async ({ page }) => {
        const products = [
            'Sauce Labs Backpack',
            'Sauce Labs Fleece Jacket'
        ];
        const productPage = new ProductPage(page);
        const checkoutPage = new CheckoutPage(page);
        const checkoutoverviewPage = new CheckoutOverviewPage(page);
        const checkoutcompletePage = new CheckoutCompletePage(page);
        const cartPage = new CartPage(page);

        await productPage.addMultipleProducts(products);
        await productPage.goToCart();
        await cartPage.clickCheckout();
        await checkoutPage.fillInformation('Ghea', 'Waworuntu', '112233');
        await checkoutPage.continueOrder();
        await checkoutoverviewPage.finishOrder();
        await expect(checkoutcompletePage.getSuccessMessage()).toContainText('Thank you for your order!');
    });
});