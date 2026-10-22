import { Page, Locator } from '@playwright/test' 

export class HomePage
{
    //Properties
    page: Page                     //Instance Variable   //Here I declare only the variable
    signupLoginBtn: Locator
    constructor(page:Page)
    {
        this.page = page                         //local Variable
        this.signupLoginBtn = page.locator('[href="/login"]')
    }

    //Methods(actions)
    async gotoHomePage(): Promise<void>
    {
        await this.page.goto("https://automationexercise.com/login")
    }

    async clickSignupLoginBtn(): Promise<void>
    {
        await this.signupLoginBtn.click()
    }

}






















//constructor is a special method which is used to initialize the object, when we create the object the constructor will call automatically