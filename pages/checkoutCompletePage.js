class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        this.backhomebutton = page.locator('[data-test="back-to-products"]');
        this.completeheader = page.locator('[data-test="complete-header"]');
    }

    getSuccessMessage() {
        return this.completeheader;
    }
}