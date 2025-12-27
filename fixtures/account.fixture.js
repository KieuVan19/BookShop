import { test as base } from '@playwright/test'
import { RegisterPage } from '../pages/RegisterPage'

export const test = base.extend({
    account: [async ({ browser }, use, workerInfo) => {
        const page = await browser.newPage();
        await page.goto("https://practice.automationtesting.in/my-account/");
        const registerPage = new RegisterPage(page)

        const emailAddress = `user_${Date.now()}@test.com`;
        const password = 'Password@123';
        await registerPage.registerAccount(emailAddress, password)
        await use({ emailAddress, password })
        console.log({emailAddress,password});
    }, { scope: 'worker' }],
  
}
)