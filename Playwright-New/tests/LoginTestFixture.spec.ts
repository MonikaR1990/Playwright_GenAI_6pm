import { test } from '../tests/LoginFixture.spec'
import { expect } from '@playwright/test'

test('TestCase 1', async({login})=>{
    await expect(login).toHaveTitle("Swag Labs")
})

test('TestCase 2', async({login})=>{
    await expect(login).toHaveURL("https://www.saucedemo.com/inventory.html")
})

test('TestCase 3', async({login})=>{

    const header = login.locator('.app_logo')
    await expect(header).toBeVisible()
})

