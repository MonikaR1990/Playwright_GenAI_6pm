import {test} from '@playwright/test'

test('Xpath', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='name']").fill("Bala")
    await page.locator("//input[@class='form-control'][@id='name'][@placeholder='Enter Name']").fill("G")
})

//1. attribute based xpath --> @ (single attribute)
//2. Multiple Attributes based xpath --> //input[@class='form-control'][@id='name'][@placeholder='Enter Name']
//3. and, or operator --> //input[@class='form-control' and @id='name1111']  //input[@class='form-control' or @id='name1111'] 
//4. contains() --> //input[contains(@id,'name')]
//5. startswith() --> //input[startswith(@id,'name')]
//6. endswith() --> no endswith
//7. Extact Visible Text match ==> //a[text()='Data Entry Form']
//8. Partial Visible Text (contains) ==> //a[contains(text(),'Entry')]
//9. Startswith find the Visible Text (starts-with) ==> //a[starts-with(text(),'Data')]
//10. Find parent element using child element ==> //option[text()='Baby']/parent::select
//11. Find Child element using parent element ==> //select[@id="searchDropdownBox"]/child::option[3]   and //select[@id="searchDropdownBox"]/child::option[position()=1]
//12. Find Grand Parent (ancestor) using grand child (descentant) ==> //select[@id="searchDropdownBox"]/ancestor::form
//13. Find Garnd Child (descentant) using grand parent (ancestor) ==> //form/descendant::option[1]
//14. Find following all family elements ==> //label[text()='Name:']/following::input
//15. Find following own sibling elements ==> //label[text()='Name:']/following-sibling::input
//16. Find preceding all family elements ==> //input[@id='twotabsearchtextbox']/preceding::label
//17. Find preceding own family elements ==> //input[@id='twotabsearchtextbox']/preceding-sibling::label
