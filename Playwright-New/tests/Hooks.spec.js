//Hooks is special function it decides when setup or cleanup code runs.

//beforeAll() --> Once run before all tests
//AfterAll() --> Once run after all tests
//beforeEach() --> runs before each tests
//AfterEach() --> runs before each tests

import { test, expect } from '@playwright/test'


test.beforeAll(async()=>{
    console.log("Start")
    //Connect to Database(Start a Server)
    //Create Test data
})

test.beforeEach(async({page})=>{
    await page.goto("https://letcode.in/")  
    //Common Setup
    //URL launch
    //Login
})

test('Test case 1', async({page})=>{
    
    await expect(page).toHaveTitle('LetCode with Koushik | Software Test Automation Hub')
})

test('Test case 2', async({page})=>{
    await expect(page).toHaveURL('https://letcode.in/')
})

test('Test case 3', async({page})=>{
    const heading = await page.locator('h1').textContent()
    expect(heading).toContain('Test Automation')
})

test.afterEach(async({page})=>{
    await page.screenshot({path:`sampletest/test_${Date.now()}.jpg`, fullPage:true})

    //Take Screenshot
    //Clean test data
    //Logout
})


test.afterAll(async()=>{
    console.log("End")
    //Close Database Connection
    //Clean up resources
    //Test Data Delete

})
