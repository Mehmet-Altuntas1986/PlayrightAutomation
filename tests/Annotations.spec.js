const {test, expect}=require('@playwright/test')

//    only
test.only('test1', async ({ page }) => {
    console.log('this is test1.....')
});


//   Skip
test.skip('test2', async ({ page }) => {
    console.log('this is test2.....')
});

test('test3', async ({ page,browserName }) => {
    console.log('this is test2.....')
    if(browserName==='chromium'){
        test.skip();
    }

});


//   Fixme
test('test6', async ({ page }) => {
    test.fixme();  
    console.log('this is test6.....')
    
});


//   Fail       expected fail but actual pass --> sonuc fail  |  expected fail but actual fail --result pass   

test('test4', async ({ page }) => {
    test.fail();  //expected.    --> gecen testi fail eder , fail olan testi basariliymis gibi  yapar
    console.log('this is test4.....')
    expect(1).toBe(2); // actual. If both exp & Actual is failed then test pass
});

test('test5', async ({ page,browserName }) => {
    console.log('this is test5.....')
    if(browserName==='firefox'){  //browser in default chromium , here is false
        test.fail();  //burasi if statement false olunca calismaz , test gecer
    }
});


//   Slow
test('test8', async ({ page }) => {
    //test.slow();  
    //test.setTimeout(5000);
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test8.....')
    
});

//npx playwright test tests/Annotation.spec.js --project chromium --headed