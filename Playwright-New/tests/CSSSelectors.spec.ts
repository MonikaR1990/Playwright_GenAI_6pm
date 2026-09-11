import {test} from '@playwright/test'

test('CSS Selectors', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.locator('#twotabsearchtextbox').fill("Laptop")
    await page.locator('textarea#twotabsearchtextbox').fill("Laptop")
    await page.locator('.nav-input.nav-progressive-attribute').click()
    await page.locator('[name="q"]').fill("Apple")
    await page.locator('input[name="q"]').fill("Apple")
    await page.locator('.form-control#name').fill("Bala")
    await page.locator('input.form-controlinput#name').fill("Bala")
    await page.locator('.form-control[placeholder="Enter Name"]').fill("bala")
    await page.locator('input').first().fill("Bala")
    await page.locator('input').last().fill("G")
    await page.locator('input').nth(1).click()
    await page.locator('textarea').first().click()
    await page.locator('[id*="username"]').click() //contains
    await page.locator('[name^="password"]').click() //starts with
    await page.locator('[name$="password"]').click() //ends with
    await page.locator('input[name$="password"]').click()
    await page.locator('form label').click() //based on relationship "Descendent or Parent Space"

    




    



})

//id --> #
//class --> .
//other attributes --> [attributname = "value"]
//multiple attributes --> 
//tagname alone -->     