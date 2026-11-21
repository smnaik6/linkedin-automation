// @ts-check
import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('LinkedIn Login Automation', async ({ page }) => {

    // List of WebElements
    const email = page.locator('//input[@type="email"]');
    const password = page.locator('//input[@type="password"]');
    const signInButton = page.locator('//button[@type="button"]//span[text()="Sign in"]');
    const searchBox = page.locator('//input[@placeholder="Search"]');
    const postsFilter = page.locator('//label[contains(text(),"Posts")]');
    const datePostedFilter = page.locator('//label[contains(text(),"Date posted")]');
    const past24HoursFilter = page.locator('//span[contains(text(),"Past 24 hours")]');
    const showResultsButton = page.locator('//span[contains(text(),"Show results")]');
    // const profilePicture = page.locator('//img[contains(@src,"profile-displayphoto-shrink")]');
    // const signOut = page.locator('//p[contains(text(),"Sign out")]');

    // Open LinkedIn Signin page
    await page.goto('https://www.linkedin.com/feed/');
    // page.waitForLoadState('networkidle');
    // await page.waitForTimeout(5000);
    // await email.waitFor({ state: 'visible' });
    await expect(email.last()).toBeVisible({ timeout: 10000 });
    await email.last().fill('surajvcpuc@gmail.com');    
    await password.last().fill('******');
    
    // scroll down to the Sign in button
    await page.mouse.wheel(0,500);
    // await signInButton.waitFor({ state: 'visible' });
    // await signInButton.scrollIntoViewIfNeeded();
    await signInButton.last().click();
    // await page.waitForTimeout(5000);

    
    // page.waitForLoadState('networkidle');
    await page.waitForLoadState('load');        // Wait for the page to load completely
    await expect(searchBox.last()).toBeVisible({ timeout: 20000 });
    await expect(searchBox.last()).toBeEditable({ timeout: 20000 });
    // await searchBox.waitFor({ state: 'visible' });
    await page.waitForLoadState('load');        // Wait for the page to load completely
    await searchBox.last().fill('SDET');
    await page.waitForTimeout(2000);            // Wait for 2 seconds before pressing Enter
    await searchBox.last().press('Enter');

    // await page.waitForTimeout(5000);

    await expect(postsFilter).toBeVisible({ timeout: 10000 });
    await postsFilter.click();
    await expect(datePostedFilter).toBeVisible({ timeout: 10000 });
    await datePostedFilter.click();
    await expect(past24HoursFilter).toBeVisible({ timeout: 10000 });
    await past24HoursFilter.click();
    await expect(showResultsButton).toBeVisible({ timeout: 10000 });
    await showResultsButton.click();
    
    await page.waitForLoadState('load');

    
    // await expect(profilePicture).toBeVisible({ timeout: 10000 });
    // await profilePicture.click();
    // await expect(signOut).toBeVisible({ timeout: 10000 });
    // await signOut.click();

    // await signInButton.waitFor({ state: 'visible' });

    // await page.getByRole('button', { name: 'Sign in' }).click();

    
    // await page.goto('https://naveenautomationlabs.com/opencart/');

    //Enter email
    // await page.locator("//input[@name='search']").fill("snaik");


    // await page.getByPlaceholder('Email or phone').fill('test@gmail.com');

    // Enter password
    // await page.locator("//input[@type='password'][1]").fill('Suraj@4545');

    // Click Sign in
    // await page.getByRole('button', {
    //     name: 'Sign in'
    // }).click();

    // Verify login result
    // await expect(page).toHaveURL(
    //     /feed|checkpoint/,
    //     { timeout: 30000 }
    // );

    console.log('Login flow completed');

});
