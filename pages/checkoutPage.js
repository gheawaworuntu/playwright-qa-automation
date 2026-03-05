class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstname = page.locator('[data-test="firstName"]')
        this.lastname = page.locator('[data-test="lastName"]')
        this.postalcode = page.locator('[data-test="postalCode"]')
        this.continuebutton = page.locator('[data-test="continue"]')
    }

    async fillInformation(firstname, lastname, postalcode){
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.postalcode.fill(postalcode);
        await this.continuebutton.click();
    }
}

export { CheckoutPage }