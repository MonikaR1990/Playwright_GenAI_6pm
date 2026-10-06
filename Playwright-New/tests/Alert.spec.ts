import {test} from '@playwright/test'

test('Dialog Box Accept', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async dialog=>{              //Event wait
        await page.waitForTimeout(3000)
        await dialog.accept()
    })

    await page.locator('#accept').click()  //Action
})

test('Dialog Box Dismiss', async({page})=>{  
    await page.goto("https://letcode.in/alert/")
   
    page.on('dialog', async d=>{
        await page.waitForTimeout(3000)
        console.log(d.message())
        await d.dismiss()
    })

    await page.locator('#confirm').click()

})

test('Dialog with prompt', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async p =>{
        await page.waitForTimeout(3000)
        console.log(p.message())
        await p.accept("Monika")
    })

    await page.locator('#prompt').click()
})








//'dialog'
//accept()
//dismiss()
//message()
//accept("Monika")  //prompt


//Register Handler Wait --> on('dialog', )
//    |
//  Click
//    |
// Alert Appers
//    |
//  Handler catches alert
//     |
//  Accept / Dismiss
