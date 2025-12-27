export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.emailAddress_TXT = page.locator("#reg_email");
        this.password_TXT = page.locator("#reg_password");
        this.register_BTN = page.getByRole('button', { name: 'Register' });
        this.consent_BTN = page.locator("//button[@class='fc-button fc-cta-consent fc-primary-button']")
        this.errorMessage_TXT = page.locator("//ul[@class='woocommerce-error']/li");  
    }

    async registerAccount(emailAddress, password) {
        await this.emailAddress_TXT.type(emailAddress, { delay: 100 });
        await this.password_TXT.type(password, { delay: 100 });
        await this.register_BTN.click({ force: true });
    }

    async goTo(){
        await this.page.goto("https://practice.automationtesting.in/my-account/");
        await this.acceptConsentIfPresent();
    }

    async acceptConsentIfPresent(){
        if(await this.consent_BTN.isVisible({timeout: 3000})){
            await this.consent_BTN.click();
        }
    }
}


