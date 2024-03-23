//lesson2

// Import 'test' and 'expect' functions from the Playwright test library
const { test, expect } = require('@playwright/test');

// Create a test scenario named 'Home Page' , page is fixture includes many functions for automation , with it we can access commands
/* async  --> java script senkronize bir yapiya sahip degil, bu yuzden promise olusturmak icin koyduk, 
await ---> ile de bu promise i dinliyoruz boylece line lar sira ile run oluyorlar */

//asynch made page a promise  , await is waiting it

//Lesson1

test('Home Page', async ({ page }) => {
   
    console.log("Test begins: Home Page Test");

    // Navigate to the Demoblaze home page
    await page.goto('https://www.demoblaze.com/index.html'); //

    // Get the title of the page
    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    // Check if the title is 'STORE'
    await expect(page).toHaveTitle('STORE');

    // Get the URL of the page
    const pageURL = await page.url();
    console.log('Page URL is:', pageURL);

    // Test completed: Home Page Test
    console.log("Test completed: Home Page Test");

    // Close the browser page
    await page.close();
    
});


