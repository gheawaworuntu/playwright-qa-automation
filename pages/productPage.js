class ProductPage {
    constructor(page) {
        //locators
        this.page = page;
        this.products = page.locator('.inventory_item');
        this.cart = page.locator('[data-test="shopping-cart-link"]');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.menuNavigation = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]')
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

    async logout(){
        await this.menuNavigation.click();
        await this.logoutButton.click();
    }
}

export { ProductPage }