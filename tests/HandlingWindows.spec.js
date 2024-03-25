
//I'm trying to import chromium browser because this time we are going to create our own page.
const { test, expect, chromium } = require('@playwright/test');

test('Handle Pages/or Windows', async () => {  //parantezin icinde page yok, cunku biz kendi pages lerimizi olusturacagiz
   
  //create a browser
  const browser = await chromium.launch(); 
  
    // Create a new context (a single browsing session)
    const context = await browser.newContext();
  
    // Create two pages     -- testi run ettigimde bu iki page birden acilacak 2 farkli tab ile
    const page1 = await context.newPage();
    const page2 = await context.newPage();
  
    // Get pages of a browser context
    const allPages = context.pages();
    console.log("Number OF pages created.....",allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle('OrangeHRM')
   
    await page2.goto("https://www.orangehrm.com/")
   // await expect(page2).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM')

    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

    await browser.close()
        
  })

/////////////////////////////////////////////////////////////  
  
test.only('Handle multiple Pages/Windows', async () => {
    // Launch the browser
    const browser = await chromium.launch();
  
    // Create a new context (a single browsing session)
    const context = await browser.newContext();
  
    // Create one page
    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page1.title());
    await expect(page1).toHaveTitle('OrangeHRM')

//promise means we have to wait till another page is open
  // Start waiting for new page before clicking.  //Promise'lerin görevlerinden biri, asenkron işlemlerin sonuçlarını beklemek ve bu sonuçları ele almak için kullanılmaktır.
    const pagePromise = context.waitForEvent('page'); //after click the link , this opens a new tab
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();  
    
    const newPage = await pagePromise;
    console.log(await newPage.title());
    await expect(newPage).toHaveTitle('OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM')

    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()
        
  })

  //https://playwright.dev/docs/pages
  //to see which browser playright support    npx playwright install --help