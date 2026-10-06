//Assertion = Verification or Testing

//Hard Assert
//Soft Assert

import {test, expect} from '@playwright/test'

test('toBeVisible', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill('sonya@123')
    await page.locator('[value="Log in"]').click()

    const profileEmail = page.locator('.account').first()

    await expect(profileEmail).toBeVisible()
})

test('toBeVisible1', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill('sonya@123456')
    await page.locator('[value="Log in"]').click()

    const errorMsg = page.locator('.validation-summary-errors')
    await expect(errorMsg).toBeVisible()
})

test('toHaveText', async({page})=>{   //Visible Text with exact match
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill('sonya@123456')
    await page.locator('[value="Log in"]').click()

    const profileEmail = page.locator('.account').first()
    await expect(profileEmail).toHaveText('sonya.a@gmail.com')    
})
test('toContainText', async({page})=>{  //Visible Text with Partial match
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill('sonya.a@gmail.com')
    await page.locator('#Password').fill('sonya@123456')
    await page.locator('[value="Log in"]').click()
 
    const profileEmail = page.locator('.account').first()
    await expect(profileEmail).toContainText('sonya')
})
test('toHaveURL', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()

    await expect(page).toHaveURL('https://demowebshop.tricentis.com/logout') //test failed
    await expect(page).toHaveURL(/login/)
})
test('toHaveTitle', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()

    await expect(page).toHaveTitle('Demo Web Shop. Login')
})
test('toBeEnabled', async({page})=>{ //terms and condition, mandatory field
    await page.goto("https://www.amazon.in/")
    await expect(page.locator('#nav-search-submit-button')).toBeEnabled()
})
test('toBeDisabled', async({page})=>{  //terms and condition, mandatory field
  await page.goto("https://www.amazon.in/")
  await expect(page.locator('#nav-search-submit-button')).toBeDisabled()  
})

//to check the current value of the input value
test('toHaveValue', async({page})=>{
    await page.goto("https://www.amazon.in/")
    const searchProduct = page.locator('#twotabsearchtextbox')
    await searchProduct.fill("Laptop")

    await expect(searchProduct).toHaveValue('Laptop')
})
test('toBeChecked', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#sunday').check()
    await expect(page.locator('#sunday')).toBeChecked()

})
test('toBeChecked1', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#sunday').check()

    await expect(page.locator('#sunday')).toHaveCount(1)
    await page.locator('#sunday').uncheck()
    await expect(page.locator('#sunday')).not.toBeChecked()
})
test('toHaveCount', async({page})=>{
   await page.goto("https://www.saucedemo.com") 
   await page.locator('#user-name').fill("standard_user")
   await page.locator('#password').fill("secret_sauce")
   await page.locator('#login-button').click()

   await page.waitForURL(/inventory.html/)
   const products = page.locator('.inventory_item_name')
   await expect(products).toHaveCount(6)

})

//toBeVisible --> Element should be visible
//toBeEnable --> Element should be enabled/clickable
//toBeDisabled --> Element should be disabled/not clickable

//toHaveValue ==> <input value = "John"> --> Input value fields value check //textbox
//toHaveText ==>  <div>Welcome John</div> ==> Text displayed inside the element //label/heading/message/paragraph
//toBeChecked ==> Checkbox / radio is selected
//not.toBeChecked() ==> Checkbox / radio is not selected

//Generic Test Cases

test('toBe', async({page})=>{
    await page.goto("https://www.amazon.in/")

    const text = await page.getByText('Amazon Pay').textContent()

    expect(text).toBe('Amazon Pay')
})

test('toBe1', async()=>{
        const testNumber = 100
        expect(testNumber).toBe(100)
    })

test('toBe2', async({page})=>{ //string, number
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()

    const title = await page.title()
    expect(title).toBe('Demo Web Shop. Login')

})
test('toContain', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()

    const title = await page.title()
    expect(title).toBe('Login')
})
test('toEqual', async({page})=>{
    const actual = {
        name: "Bala",
        id: 101
    }
    const expected = {
        name: "Bala",
        id: 101
    }
    expect(actual).toEqual(expected)
})
test('toBeTruthy', async()=>{
    const isActive = true
    expect(isActive).toBeTruthy()

    const username = "Meena"
    expect(username).toBeTruthy()
    })

test('toBeFalsy', async()=>{
    const isActive = false
    expect(isActive).toBeFalsy()

    let username
    expect(username).toBeFalsy()
    })


//title()
//url()
//textContent()

//Truthy values
//1 to...... all whole numbers
//-1 to......all whole numbers
//"hello" all strings are truthu value
//"0"
//[]
//{}

//Falsy Values
//0
//-0
//On
//null
//""
//undefined
//NaN
