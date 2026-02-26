class LoginPage {
    constructor(page) {
        this.page = page;
        this.errorMessage = page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3');

        //Locators
        this.usernameInput = page.locator('//*[@id="user-name"]');
        this.passwordInput = page.locator('//*[@id="password"]');
        this.loginButton = page.locator('//*[@id="login-button"]');
        this.message = page.locator('//*[@id="login_button_container"]/div/form/div[3]');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    getErrorMessage(){
        return this.errorMessage;
    }
}

export { LoginPage };