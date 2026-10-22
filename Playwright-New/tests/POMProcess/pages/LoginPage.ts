import { Page, Locator } from '@playwright/test'

export class LoginPage
{
    page: Page                 //Instance Variable
    emailAddress: Locator
    password: Locator
    loginBtn: Locator
    loggedUser: Locator
    errorMsg: Locator
    constructor(page: Page)    //Local Variable
    {
        this.page = page
        this.emailAddress = page.locator('[data-qa="login-email"]')
        this.password = page.locator('[data-qa="login-password"]')
        this.loginBtn = page.locator('[data-qa="login-button"]')

        this.loggedUser = page.locator('//a[contains(text(),"Logged")]')
        this.errorMsg = page.getByText('incorrect')
    }

    async LoginAs(username: string, password: string)
    {
        await this.emailAddress.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}