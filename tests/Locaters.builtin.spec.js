/*
Ref link: https://playwright.dev/docs/locators

page.getByAltText() - to locate an element, usually image, by its text alternative. 
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/


const {test, expect} = require('@playwright/test')

test('Locators', async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  //page.getByAltText() - to locate an element, usually image, by its text alternative. (alt attribute value is written )
   const logo= await page.getByAltText('company-branding'); 
   await expect(logo).toBeVisible();

  // page.getByPlaceholder() - to locate an input by placeholder. //placeholder attribute varsa onun value sunu yaz
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
 
 //page.getByRole() to locate by explicit and implicit accessibility attributes. 
  await page.getByRole('button', { type: 'submit' }).click(); //button is tag , type is attribute in it 

  //page.getByText() to locate by text content.
  const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
   await expect(page.getByText(name)).toBeVisible();  //inspect gorulen text i de direkt koyabilirdik

})

/* to run test in this class
npx playwright test Locators_builtin spec.js --project chromium --headed

https://playwright.dev/docs/locators   open to see how to use them

* npx playwright codegen  ile 2 screen acilir , birinci screenda manuel test yap, ikinci screende dili sec , code hazir yazilmis olur
! npx playwright codegen --help    ile neler yapabilecegimizi ogrenebiliriz, ornegin codu belirli file da yazilmasini saglayabiliriz
ornegin     o yada output yaz
npx playwright codegen -o tests/mytesst.spec.js      dersek boyle bir file acilir ve codelar oraya kaydolur manuel islemden sonra 
npx playwright codegen -b chromium         //b yada browser yaz

https://playwright.dev/docs/test-assertions        how to make assertions

*/