import { Locator } from '@playwright/test'
export async function getValidationMessage(locator) {
    return await locator.evaluate(el => el.validationMessage);
}


