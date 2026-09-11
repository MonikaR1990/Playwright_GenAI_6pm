import {test} from '@playwright/test'

test('GetByMethods', async({page})=>{
    // await page.goto("https://www.amazon.in/")

    // //getByText (Exact visible text and partial visible text)
    // await page.getByText("AmazonBasic").click()
    // await page.getByText("Amazon Pay").click()
    // await page.getByText('Log in').click()

    // //getByRole
    // await page.getByRole('searchbox',{name:'Search Amazon.in'}).fill("Laptop")
    // await page.getByRole('button', {name:'Go'}).click()
    // await page.getByRole('combobox', {name:'searchDropdownDescription' }).click()
    // await page.getByRole('link', {name:'Gift Cards'}).click()
    // await page.getByRole('img', {name: 'Vinoth Tech Solutions'}).click()
    // await page.getByRole('radio', {name: 'Male'}).click()
    // await page.getByRole('checkbox', {name:'Selenium WebDriver'}).check()
    // await page.getByRole('link', {name: 'Beauty'}).click()

    // //getByPlaceholder (based on placeholder attribute of an element)
    // await page.getByPlaceholder('Search Amazon.in').fill("Laptop")
    // await page.getByPlaceholder('Enter Name').fill("Bala")
    // await page.getByPlaceholder('Enter EMail').fill("bala@gmail.com")
    

    // //getByTitle (based on "title" attribute of an element
    // await page.getByTitle('Search for Products, Brands and More').fill('Laptop')

    //getByLabel
    // await page.goto("https://www.amazon.in/")
    // await page.getByLabel('Search Amazon.in').fill("Laptop")
    // await page.waitForTimeout(2000)

    await page.goto("https://vinothqaacademy.com/demo-site/")
    await page.getByLabel("First Name  ").fill("Monika")
    await page.waitForTimeout(2000)

    //getByTestId (based on "data-testid" attribute of an element) || data-testid="switch-accounts-button"
    await page.getByTestId('switch-accounts-button').click()

    //getByAltText (based on image text or name) (only for image attribute)
    await page.getByAltText('Vinoth Tech Solutions').click()
})

//textarea[text()='AmazonBasics']  //xpath
//textarea[contains(text(),'AmazonBasic')]
//text='AmazonBasics' //css selector

//getByRole ==> name --> property --> visible text, aria-label, aria-describedby, value