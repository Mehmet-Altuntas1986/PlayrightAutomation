const {test, expect}=require('@playwright/test')

test('Boostrap dropdown', async ({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//span[normalize-space()='PIM']").click()
  
    //click on drop down
    await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]").click()

    //waiting for options
    await page.waitForTimeout(5000);

    // select option from hidden dropdown - dropdown
    const options=await page.$$("//div[@role='listbox']//span")
    for(let option of options)
    {
        const jobTitle=await option.textContent();
        console.log("value is=====>",jobTitle)
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }

    }

    await page.waitForTimeout(5000);
})

//drpdown option larini inspect etmeye calisiyoruz ama kisa surede disappear(yok oluyorlar) ve edemiyoruz
//bu durum icin selectorHub eklentisi freeze etme ozelligi var (debugger a tikla) , bir button var ona tikliyoruz