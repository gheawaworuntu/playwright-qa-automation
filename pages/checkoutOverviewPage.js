class CheckoutOverviewPage {
    constructor(page) {
        this.page = page;
        this.finishbutton = page.locator('[data-test="finish"]');
    }

    async finishOrder() {
        await this.finishbutton.click();
    }
}

export { CheckoutOverviewPage }