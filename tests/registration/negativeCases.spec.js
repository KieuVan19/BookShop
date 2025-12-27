// import { invalidEmailCases } from '../../test-data/invalidEmailCases'
import { RegisterPage } from '../../pages/RegisterPage';
import { test, expect } from '@playwright/test'

// import { getValidationMessage } from '../../helpers/getValidationMessage'


let password;
let emailAddress;
let registerPage;
test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await registerPage.goTo()
    password = `account@${Date.now()}`;
    emailAddress = `account.${Date.now()}@email.com`;

})
// invalidEmailCases.forEach(({ title, emailAddress, errorMessage }) => {
//     test(`Invalid case: ${title}`, async ({ page }) => {
//         const registerPage = new RegisterPage(page);
//         await registerPage.registerAccountWithInvalidEmailId(emailAddress, password);
//         // const isValid = await registerPage.emailAddress_TXT.evaluate(el => el.validity.valid);
//         // expect(isValid).toBe(false);
//         const validationMessage = await getValidationMessage(registerPage.emailAddress_TXT);
//         console.log(validationMessage);
//         expect(validationMessage).toBe(invalidEmailCases.errorMessage);
//     })
// })
test("Register with an empty email", async ({ page }) => {
    await registerPage.registerAccount("", password);
    expect(registerPage.errorMessage_TXT).toHaveText("Error: Please provide a valid email address.")
})

test("Register with an empty password", async ({ page }) => {
    await registerPage.registerAccount(emailAddress, "");
    expect(registerPage.errorMessage_TXT).toHaveText("Error: Please enter an account password.")
    console.log({ emailAddress, password });
})

test("Register with an empty email and an empty password", async ({ page }) => {
    await registerPage.registerAccount("", "");
    expect(registerPage.errorMessage_TXT).toHaveText("Error: Please provide a valid email address.")
})

