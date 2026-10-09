import { test, expect, Page } from '@playwright/test'

test('Windows Handling', async({page})=>{
    await page.goto("https://letcode.in/window")

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), //newPage
        page.locator('#home').click() //clickResult
    ])

    const newPageURL = newPage.url()
    console.log(newPageURL)

    const newPageTitle = newPage.title()
    console.log(newPageURL)

    await newPage.getByPlaceholder('Search practice labs...').fill("Selenium")
    await newPage.waitForTimeout(2000)
})

test('Multiple Window Handling', async({page, context})=>{
    await page.goto("https://letcode.in/window")
    
    await Promise.all([
      context.waitForEvent('page'),
      context.waitForEvent('page'),
      page.locator('#multi').click() 
    ])

    let alertPage: Page | undefined
    let dropDownPage: Page | undefined

    for(let p of context.pages())
    {   
        await page.waitForLoadState('load')
        if(p.url().includes('/alert'))
        {
            alertPage = p
            await alertPage.bringToFront()
            await alertPage.getByText('Contact').first().click()
            await alertPage.waitForTimeout(3000)
        }
        if(p.url().includes('/dropdowns'))
        {
            dropDownPage = p
            await dropDownPage.bringToFront()
            await dropDownPage.locator('#fruits').selectOption('2')
            await dropDownPage.waitForTimeout(3000)
        }

    }

})

//1 st iteratiion
//p = main page


//Primitive

//string
//number
//boolean
//undefined
//null
//Symbol
//bigInt


//non-Primitive
//class
//interface
//type
//enum


//browser
//context
//page






//Promise.all==> used to handle multiple asynchronus process and you want to all completed
//page.waitForEvent('popup') ==> wait untill the current page opens a popup/new tab



//Destructuring //Extract the values from the Array and store them in separate value

// const fruits = ["Apple", "Orange", "Mango"]

// const [f1] = fruits

// console.log(f1)  //Apple
// console.log(f2)  //Orange




