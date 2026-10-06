import { test } from '@playwright/test'

test('Iframe', async({page})=>{
    await page.goto("https://letcode.in/frame")

    const frame1 = page.frameLocator('#firstFr')

    await frame1.locator('[name="fname"]').fill("MOnika")
    await frame1.locator('[name="lname"]').fill("Rajendran")

    
    const frame2 = frame1.frameLocator('[title="Inner Frame"]')

    await frame2.locator('[name="email"]').fill("monika@gmail.com")

    await frame1.locator('[name="fname"]').clear()
    await frame1.locator('[name="lname"]').clear()
    
    await page.getByText("Contact").nth(0).click()

})