//const { test, expect } = require('@playwright/test'); //or use below
import {test, expect} from '@playwright/test'

test('Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
 
    //Click on the login button - using property

    //await page.locator("id=login2").click()   //or click like in next line
    await page.click("id=login2");
    
    // Fill the login form
    //await page.locator('#loginusername').fill('pavanol') //CSS
    //await page.locator('#loginusername').type('pavanol') //CSS

    await page.fill('#loginusername', 'pavanol') //CSS     //element and value to fill
      
    await page.fill('#loginpassword', 'test@123') //CSS
    
    
    // Click (locater of the element)
    await page.click("button[onclick='logIn()']");  // CSS
     
    // Verify successful login by checking the presence of the logout button
    const logoutLink=await page.locator('//a[normalize-space()="Log out"]') //XPath
    await expect(logoutLink).toBeVisible(); 

   await page.close();
 
 });
 
