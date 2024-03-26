const { test, expect } = require('@playwright/test');

test('Test1', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})

test('Test2', async ({ page }) => {
    await page.goto('https://demo.opencart.com/');
    await expect(page).toHaveTitle('Your Store');
})


test('Test3', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo stor');
})
// https://playwright.dev/docs/test-reporters  incele 

//npx playwright test tests/Reporters.spec.js --project chromium
/*
       * eger config file da global reporter aktif degilse sona reporter ekle

npx playwright test tests/Reporters.spec.js --reporter=list     
npx playwright test tests/Reporters.spec.js --reporter=html      sonucu playright-report file inda index.html olarak belirir 

*/

/*
playwright.config.js file inda nasil yazabiliriz

export default defineConfig({
  reporter: 'list',
});

export default defineConfig({
  reporter: 'line',
});


export default defineConfig({
  reporter: 'dot',
});





result.json file olusacak projemizde

export default defineConfig({
  reporter: [['json', { outputFile: 'results.json' }]],
});

export default defineConfig({
  reporter: [['junit', { outputFile: 'results.xml' }]],
});

 export default defineConfig({
  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'
  // default 'list' when running locally
  reporter: process.env.CI ? 'github' : 'list',


  export default defineConfig({
  reporter: './my-awesome-reporter.ts',
});

export default defineConfig({
  reporter: [['blob', { outputDir: 'my-report', fileName: `report-${os.platform()}.zip` }]],
});




});

yada config file in icinde birden fazla reporter i bu sekilde ekleyebilirsin

clear

*/