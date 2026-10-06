//Wait

//AUTO WAIT

//Selenium manual implicit wait, explicit (10 sec)

import {test} from '@playwright/test'


test('Amazon', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("iPhone")
})


//1. wrong selector or xpath
//2. element load and visible take more  than 30 seconds (slow application)
//3. iframe content or other page content
//4. element present but not visible
//5. element in disable mode
//6. Page not loaded fully
//7. Dynamic Elements
/*
1. Is the selector correct?
↓
2. Is the element actually present?
↓
3. Is it visible?
↓
4. Is it enabled/clickable?
↓
5. Is it inside an iframe?
↓
6. Are you on the correct page?
↓
7. Is the application/API loading properly?

*/

//Auto wait
// waitFor()
    //wait for specific condition or state f an element before continuing

    // attached ==> wait untill Element Pesent in DOM
    // visible ==> wait untill element becomes visible (also check attached)
    // detached ==> wait untill the element remove from the DOM

// waitForSelector() 
// waitForLoadStatus()
// waitForURL()
// waitForEvent() 
// waitForTimeOut()
// waitForResponse()
// waitForRequest()

test('waitFor', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("iPhone") 
    const searchBtn = page.locator('#nav-search-submit-button')
    await searchBtn.waitFor({state:'attached', timeout: 50000})
    await searchBtn.waitFor({state:'visible', timeout: 50000})
})

//waitForSelector (wait until a specific element appears or reaches a particular stages)

//attached - The Elements is present inthe HTML/DOM, but it may or may not be visible
//visible - Element exist in HTML/DOM, and user can see it
//detached - Element completely removed from DOM
//hidden - Element exist in HTML/DOM, but not visble (DOM exist & screen not visible, )


test('waitForSelector', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForSelector('input#twotabsearchtextbox', {state: 'visible'})
})

//waitForLoadState ==> it is used to wait untill the webpage reaches a particular loading state
test('waitForLoadState', async({page})=>{
    //await page.goto("https://www.amazon.in/", {waitUntil: 'domcontentloaded'})
    await page.goto("https://www.amazon.in/")
    //await page.waitForLoadState('domcontentloaded')
    //await page.waitForLoadState('load')
    await page.locator('#twotabsearchtextbox').fill("iPhone") 
    await page.waitForLoadState('networkidle') //500 ms

    //continue

})

//wait untill the browser URL changes to the expected URL
test('waitForURL', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator("#user-name").fill("standard_user")   
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()

    await page.waitForTimeout(3000) //3 secs the code is blocked

    await page.waitForURL("https://www.saucedemo.com/inventory.html") //extact URL

    await page.waitForURL('**/inventory.html') //URL containing word

    await page.waitForURL(/inventory/) //using regular expression 
    
    const products = await page.locator('.inventory_item_name ').allInnerTexts()
    console.log(products)

    await page.waitForTimeout(3000)

})


//playwright gives 3 states
//1. load
//2. domcontentloaded - 
//3. networkidle

/*
page.goto()
|
HTML Load Statrts
|
DOM created
|
Images / elements / CSS / JS load
|
Network Request Finished
|
Page Ready


domcontentloaded

HTML received
|
HTML is Parsed
|
DOM Created
|
DOMContentLoaded
|
Images/video/Css/script other resources may still loading

<h1>Amazon<h1>               --> DOM ready
<img src='abc.jpg'></img>

DOMContentLoaded ==> HTML/DOM is ready

load ==> page all resources/load event complted

Browser open page
|
HTML is parsed
|
DOM created
|
DOMContentLoaded
|
Images/CSS/Script other resources load


Common Resources:

HTML -> Page Structure
CSS -> page degin/style
JavaScript -> page behaviour
Images -> product/logo images
Fonts -> text appears  etc


networkidel

Browser

GET/products
GET/api/products
GET/categories
GET/images/product1.png
GET/images/product1.png

Network Request
|
Request 1
Request 2
Request 3
|
No active request
|
500 ms quiet
|

//common events
//popup
//dialog
//download
//request
//response
//page

wait
waitForURL  ==> wait untill the URL changes
waitForEvent ==> wait untill the event happens
waitForSelector ==> wait for an element condition
waitForLoadState ==> wait for loading state (load, domcontent, networkIdle)
 

*/



