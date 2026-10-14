//TestFixtures

//A fixture provides evrything a test needs to execute 

//Test Fixture is pre-defined setup or reusable object


//common playwright fixtures

//browser ==> Browser Instance (browser object)
//context ==> separate browser session
//page    ==> Browser Tab/Page
//browserName ==> To get the Name of the browser
//request ==> API request Object

//{page} ==> also build-in fixture  playwright, it automatically open the browser application, session create (create context), evert tab open page

import { test, chromium } from '@playwright/test'

test('Fixture_1', async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com/")
})

test('Fixture_2', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com/")
})

test('Fixture_3', async({context})=>{
    const page = await context.newPage()
    await page.goto("https://www.google.com/")
})

test('Fixture_4', async({page})=>{
    await page.goto("https://www.google.com/")
})


test('Two users login test', async({browser})=>{
    const context1 = await browser.newContext()
    const context2 = await browser.newContext()

    const page1  = await context1.newPage()
    const page2 = await context2.newPage()

    await page1.goto("https://www.saucedemo.com/")
    await page1.waitForTimeout(3000)
    await page1.locator('#user-name').fill("standard_user")
    await page1.locator('#password').fill("secret_sauce")
    await page1.locator('#login-button').click()

    await page2.goto("https://www.saucedemo.com/")
    await page2.waitForTimeout(3000)
    await page2.locator('#user-name').fill("problem_user")
    await page2.locator('#password').fill("secret_sauce")
    await page2.locator('#login-button').click()

})




