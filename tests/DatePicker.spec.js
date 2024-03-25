const { test, expect } = require('@playwright/test');

test("Date Picker", async ({ page }) => {
    const year = '2024';
    const month = 'March';
    const date = '20';

    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.fill('#datepicker','07/15/2023') //direct             --->first way if it accepts 07/15/2023 writting this
    
    await page.click('#datepicker');  //it opens date picker box

    while (true) {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentYear === year && currentMonth === month) {
            break;
        }

         await page.click("[title='Next']");
        //await page.click("[title='Prev']");
        // await page.waitForTimeout(1000);
    }

    //date selection - using loop
    const dates = await page.$$("//a[@class='ui-state-default']");  //belirli yila  ait butun gunleri icine alan bir array olusuturduk
    for (const dt of dates) {
        if (await dt.textContent() === date) {
            await dt.click();
        }
    }
    

    //date selection - direct - no loop
    //await page.click(`//a[@class='ui-state-default'][text()='${date}']`);  //yukardaki date in gelmesi icin java scriptte boyle yapiliyor

    await page.waitForTimeout(3000);
});
