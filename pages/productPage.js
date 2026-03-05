class ProductPage {
    constructor(page) {
        //locators
        this.page = page;
        this.products = page.locator('.inventory_item');
        this.cart = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addProductByName(productName) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .locator('button')
            .click();
    }

    async addMultipleProducts(products) {
        for (const product of products) {
            await this.addProductByName(product)
        }
    }

    getCartBadge() {
        return this.cartBadge;
    }

    async goToCart() {
        await this.cart.click();
    }
}

export { ProductPage }