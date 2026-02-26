class ProductPage {
    constructor(page) {
        //locators
        this.page = page;
        this.products = page.locator('.inventory_item');
        this.cart = page.locator('[data-test="shopping-cart-link"]');
        this.productsName = page.locator('.inventory_item_name');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async addProductByName(productName) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .locator('button')
            .click();
    }

    getCartBadge() {
        return this.cartBadge
    }
}

export { ProductPage }