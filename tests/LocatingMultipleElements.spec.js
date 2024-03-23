//Lesson3
const { test, expect } = require('@playwright/test');

test('LocateElements', async ({ page }) => {
    
    await page.goto('https://www.demoblaze.com/index.html')

     // Locate and return all the links on the webpage
    /*const links = await page.$$('a');                      
  
    for (const link of links) {
            const linktext = await link.textContent();
            console.log(linktext);
        }*/




    //Locate all the products displayed on home page , use 2  $$ if you want to locate multiple elements (optional)
await page.waitForSelector("//div[@id='tbodyid']//h4/a");


const products=await page.$$("//div[@id='tbodyid']//h4/a");

    for (const product of products) {
        const prodName = await product.textContent();
        console.log(prodName);
    }

 });

 //if we want to look at multiple elements , 2 dolar signs we should use
 //npx playwright test LocatingMultipleElements.spec.js --project chromium --headed


 /*
 Built-in in locators.
page getByRole() to locate by explicit and implicit accessibility attributes. 
page-getByText() to locate by text content.
page getByLabel() to locate a form control by associated label's text. 
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute
 */