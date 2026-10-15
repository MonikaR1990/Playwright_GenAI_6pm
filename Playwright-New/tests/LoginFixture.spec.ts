//Custom Fixture is a resusable setup

//once we create a fixture and reuse in across multiple test

//test - the original playwright test object
// as base - gives the imported test object another name "base"

//<> symbols used for typescript generics

import {test as base} from '@playwright/test'
import { Page } from '@playwright/test'   //Page is interface in playwright

type myfixture = {
    login: Page   //Page interface given as type for login
}

export const test = base.extend<myfixture>({
    login: async({page}, use) => {
        await page.goto("https://www.saucedemo.com/")

        await page.locator('#user-name').fill("standard_user")
        await page.locator('#password').fill("secret_sauce")
        await page.locator('#login-button').click()

        await use(page)

    }
})

