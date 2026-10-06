import {test, expect} from '@playwright/test'

let start = Date.now()

test('ScreenShot 1', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path: 'E:\\myletcode.jpg', fullPage: true})
})

test('ScreenShot 2', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path: 'E:\\myletcode.jpg'}) //local folder
})

test('ScreenShot 3', async({page})=>{
    await page.goto("https://letcode.in/")
    const sandBox = page.locator("//span[text()='New! Playwright Quiz Sandbox Ready']/parent::div")
    await sandBox.screenshot({path: `ScreenShots_1/sandBox.jpg`}) //project folder
})

test('ScreenShot_4', async({page})=>{
    await page.goto("https://www.saucedemo.com") 
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await expect(page).toHaveTitle('Swag Labs')
})

test('ScreenShot_5', async({page})=>{

    let timeStamp = Date.now() //it is used to get the current date and time as a number
    console.log(timeStamp)
    await page.goto("https://www.saucedemo.com") 
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await expect(page).toHaveTitle('Swag Labs')

    await page.screenshot({path: `ScreenShot_2/test_${timeStamp}.jpg`})


})

let end = Date.now()

console.log("Time Taken: ", end-start,"ms")

//1970 Jan 1 - 12 am
// 1 seconds --> 1000 ms
// 10 seconds --> 10000 ms
// After many years --> ?


//on-first-retry

//First attempt
//  |
// Failed
//  |
// Retry
//  |
// Video Recorded