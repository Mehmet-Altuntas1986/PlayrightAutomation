const { test, expect } = require('@playwright/test')


test('test1', async ({ page }) => {
    console.log('this is test1.....')
});

test('test2@sanity', async ({ page }) => {
    console.log('this is test2.....')
});


test('test3@sanity', async ({ page }) => {
    console.log('this is test3.....')
});


test('test4@reg', async ({ page }) => {
    console.log('this is test4.....')
});


test('test5@reg', async ({ page }) => {
    console.log('this is test5.....')
});

test('test6@reg@sanity', async ({ page }) => {
    console.log('this is test6.....')
});

//npx playwright test tests/Tags.spec.js --project chromium --grep @reg
//npx playwright test tests/Tags.spec.js --project chromium --grep @reg@sanity    //both reg nd sanity tags run
//test tests/Tags.spec.js --project chromium --grep @reg --grep-invert@sanity     //reg run olur ama sanity run olmaz