import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../pages/RegisterPage';
import { generateAccountData } from '../../utils/account-data';
import { MyAccountPage } from '../../pages/MyAccountPage';

let registerPage;
let myAccountPage;
test.describe("Registration", () => {
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        myAccountPage = new MyAccountPage(page);
        await registerPage.goTo();
    })
    test("Sign in", async ({ page }) => {
        const { emailAddress, password } = generateAccountData();
        await test.step('Submit Email address and Password', async () => {
            await registerPage.registerAccount(emailAddress, password)
        })
        const username = await myAccountPage.getUserName();
        console.log(username);
        await test.step('Verify that user is navigated to MyAccount page and Username is displayed', async () => {
            expect(username).toBe(emailAddress.split('@')[0]);
        })
    })
})

