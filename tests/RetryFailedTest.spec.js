import { test, expect } from '@playwright/test';
//import { LoginPage } from '../tests/pages/LoginPage';
const { LoginPage } = require('../tests/pages/LoginPage');    //buda olur import icin

import { HomePage } from '../tests/pages/HomePage';
import { CartPage } from '../tests/pages/CartPage';

test('test', async ({ page }) => {

//   without pom   
  /*await page.goto('https://www.demoblaze.com/index.html');
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//button[normalize-space()="Log in"]').click();
  */


//   with pom    
  //Login Page
  const login = new LoginPage(page)      //test deki ({ page }) i parametre olarak ekledik ve bu constructor i cagirir LoginPage te
  await login.gotoLoginPage()
  await login.login('pavanol', 'test@123')
  await page.waitForTimeout(3000)

  //Home Page
  const home = new HomePage(page)
  await home.addProductToCart('Nexus 6')
  await page.waitForTimeout(3000)
  await home.gotoCart();
  
  //Cart Page
  const cart = new CartPage(page)
  await page.waitForTimeout(3000)
  const status=await cart.checkProductInCart('Nexus 6'); //command+click takes us to method
  expect(await status).toBe(true);

});
//npx playwright test tests/RetryFailedTest.spec.js --project chromium --headed --retries=1