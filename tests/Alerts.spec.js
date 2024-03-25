const { test, expect } = require('@playwright/test');


//test.skip dersem testi skip ediyor , sonraki teste geciyor
test('Alert with OK', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Enable alert handling or dialog window handler
  page.on('dialog', async dialog => {
    // Verify type of dialog
     expect(dialog.type()).toContain('alert');   
    
    // verify message of alert
    expect(dialog.message()).toContain('I am an alert box!');
    
    //click on alert ok button to close the dialog 
    await dialog.accept();
  });
  // So before opening the alert window, we have to enable the alert handling.
  // Click on Trigger an alert button          
   await page.click('//button[normalize-space()="Alert"]'); //opening alert window
});



test('Confirm Alert with OK and Cancel', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable alert handling
    page.on('dialog', async dialog => {
      // Verify type of dialog
       expect(dialog.type()).toContain('confirm');   
      
      // verify message of alert
      expect(dialog.message()).toContain('Press a button!');
      
      //click on alert ok button      //dismiss() ole cancel buttonuna tiklariz
      await dialog.accept();
    });
     // Click on Trigger an alert button
     await page.click('//button[normalize-space()="Confirm Box"]');

    // Verify message displayed after clicking on OK button
    await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')      //aler box in icinde degildi "You pressed OK!

  });
  

//promtlarda bir input box var ve bir komut var , ornegin ismini yaz gibi , sonra cancel ok button i var
test('Prompt Alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    // Enable alert handling
    page.on('dialog', async dialog => {
      // Verify type of dialog
       expect(dialog.type()).toContain('prompt');   
      
      // verify message of alert
      expect(dialog.message()).toContain('Please enter your name:');
      
      //Verify Default Input Value
      expect(dialog.defaultValue()).toContain('Harry Potter');

      // Click on OK Button with any value for input box
      await dialog.accept('John'); 
    });
     // Click on Trigger an alert button
     await page.click('//button[normalize-space()="Prompt"]'); //opens alert window

    // Verify message displayed after clicking on OK button   //in promp box ta bu belirmedi
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?')

  });
  


  // page.on('dialog', async dialog => {            }          this is handler

 