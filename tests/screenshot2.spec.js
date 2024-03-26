//using
// screenshot: 'on' in config file

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
});

  /* 
  Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer 
  trace: 'on-first-retry',
  screenshot: 'on',      
  
  screenshot: 'on', screenshot2 class inda iken ,playright config file ina gittik ve ekledik 
  eger amacimiz herbir test sonrasi ekran goruntusunu otomatik almaksa , boyle yapariz
  ve screenshootlar test-results file ina gider
  ve npy playright show-report  da da bu screenshootlari rapor altinda goruruz


  */