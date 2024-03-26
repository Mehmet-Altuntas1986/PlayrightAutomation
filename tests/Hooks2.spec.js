import {test, expect } from '@playwright/test';
//herbir test icin login ve logout olacak 

let page; //global , fixture olusturmak icin

test.beforeEach(async({browser}) => {      //browser is a fixture
  page = await browser.newPage();          //page fixture olusturduk,butun testler icin hazir artik
  await page.goto('https://www.demoblaze.com/index.html');
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('//button[normalize-space()="Log in"]').click();
});


test.afterEach(async() => { //parantez icine page fixture koymadik, cunku beforeEach te page fixture butun testler icin olusturmustuk
  await page.locator('#logout2').click() // logout
});

 test('Home Page Test NoOf products', async () => {
    const products=await page.$$('#tbodyid .hrefch')
  console.log('Number of products:', products.length)
  expect(products).toHaveLength(9)
  });

  test('Add Product to cart Test', async () => {
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
   await page.locator('.btn.btn-success.btn-lg').click()
   //handle alert
   page.on('dialog', async dialog=>{
     expect(dialog.message()).toContain('Product added. ')
    await dialog.accept();
      })
 });

 /*
 playwrightConfig.config.js file ina gitti

     Run tests in files in parallel 
 *   fullyParallel: true,   configurationda bunu false a cevirdik

     Opt out of parallel tests on CI. 
 *   workers: process.env.CI ? 1 : undefined,         burda degisiklik yapmadik ama 1 olmali (browser sayisi)


*/









