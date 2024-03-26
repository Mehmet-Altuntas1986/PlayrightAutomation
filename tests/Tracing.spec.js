
//tracing will help us debugging in each step line
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.htm'); //change html to htm
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.locator('#logout2')).toBeVisible()
});

//npx playwright test tests/Tracing.spec.js --project chromium --headed
//npx playwright show-trace test-results/Tracing-test-chromium/trace.zip

/*
     opening a trace 

npx playwright show-trace path/to/trace.zip      projemizde test results file inin icinde olustu, olusmasi icin config te trace ekledik
path is in     test-results/Tracing-test-chromium/trace.zip


/*
Available options to record a trace:

'on-first-retry' - Record a trace only when retrying a test for the first time.
'on-all-retries' - Record traces for all test retries.
'off' - Do not record a trace.
'on' - Record a trace for each test. (not recommended as it's performance heavy)
'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.
You can also use trace: 'retain-on-failure' if you do not enable retries but still want traces for failed tests.
*/


