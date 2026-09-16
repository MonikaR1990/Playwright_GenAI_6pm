import {test} from '@playwright/test'

test('Interactions', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // //Textbox or Input box
    // //1. fill() ==> enter text as quick
    // await page.locator('#name').fill('Bala')
    // await page.fill('#name', 'Bala')

    // //type()
    // await page.locator('#name').type('Bala')

    // //2. presssquentially() ==> (Character by Charcter Typing) 
    // await page.locator('#name').pressSequentially('Bala')

    // //Buttons
    // //3. click()
    // await page.locator('.start').click()
    // //await page.click('.start')

    // //4. clear()
    // await page.locator('#name').clear()

    // //5. radio button (click, check)
    // await page.locator('#male').click()
    // await page.locator('#male').check()

    // //6. check box (check)
    // await page.locator('#sunday').check()
    // await page.check('#sunday')

    // //7. check box (uncheck)
    // await page.locator('#sunday').uncheck()
    // await page.uncheck('#sunday')

    // //8. DropDown (selectOption)
    // await page.locator('#country').selectOption('germany') //Select Option based on value attribute

    // await page.locator('#country').selectOption({label: 'Australia'}) //Select option based on visible text

    // await page.locator('#country').selectOption({index: 4}) //Select option based in Index

    // //Multiple Dropdown

    // await page.locator('#colors').selectOption(['red', 'green', 'yellow'])

    // await page.locator('#colors').selectOption([{label: 'Australia'}, {label: 'Germany'}, {label: 'France'}])

    // //hover() (mouse moves)

    // await page.locator('Point Me').hover()
    // await page.getByText('Mobiles').click()

    // //Double Click() ==> dblClick()
    // await page.getByText('Copy Text').dblclick()
    // await page.dblclick("//button[text()='Copy Text']")

    // //Drag and drop
    // await page.dragAndDrop('#droppable', '#draggable')

    // //Right Click
    // await page.locator('.dropbtn').click({button: 'right'})

    // await page.waitForTimeout(3000)

    // press
    // await page.getByRole('combobox', {name:'Search'}).fill("Selenium")
    // await page.getByRole('combobox', {name:'Search'}).press('Enter')

    // await page.locator('#Wikipedia1_wikipedia-search-input').focus()
    // await page.locator('#Wikipedia1_wikipedia-search-input').fill("Java")
    // await page.locator('.wikipedia-search-button').press('Tab')
    // await page.locator('.wikipedia-search-button').press('Enter')

    //keyboard.press()
    await page.locator('#phone').fill('17, East st')
    await page.keyboard.press('Control+A') //select all
    await page.keyboard.press('Control+X') //cut

    await page.locator('#textarea').focus()
    await page.keyboard.press('Control+V')

    await page.locator('#textarea').selectText()

    

    //File Upload
    await page.locator('#singleFileInput').setInputFiles('E:\\Data.txt')

    await page.locator('#multipleFilesInput').setInputFiles(['E:\\Data.txt', 'E:\\Data.docx', 'E:\\Data1.txt'])

    //Scroll
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()

    await page.waitForTimeout(3000)

    //await page.locator('[aria-label="Amazon India Home"]').scrollIntoViewIfNeeded()


    //Mouse Scroll

    await page.mouse.wheel(0, 500) //Scroll up
    await page.mouse.wheel(0, -500) //Scroll Down
    await page.mouse.wheel(500, 0) //Scroll Right
    await page.mouse.wheel(-500, 0) //Scroll Left
    





})