import { $, browser, expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';

describe ('REI Website searchBar Functionality Test',  () => {
  it('should perform a searchbar Functionality test', async () => {
    await browser.url('https://www.rei.com');

    const searchInput = await $('.search__input');
    await searchInput.setValue('hiking boots');
    await browser.keys('Enter');
    await browser.pause(3000);

     });
});



  
describe('Menu Link Validation', () => {
  it('should iterate through all menu links and verify they are working', async () => {
    // Grab all the menu links (adjust the selector to match your site's menu)
    const menuLinks = await $$('a[href*="/camp-hike"]');

    for (let i = 0; i < menuLinks.length; i++) {
      // Re-fetch elements each time to avoid stale element errors
      const currentMenuLinks = await $$('a[href="/c/hiking-footwear"]');
      const link = currentMenuLinks[i];
      const linkText = await link.getText();
      const href = await link.getAttribute('href');

      

      // Click the link
      await this.link.click();

      // Wait for page or section to load (based on your site's behavior)
      await browser.pause(1000); // You could use better waiting logic here

      // Optionally check if URL contains expected href
      const currentUrl = await browser.getUrl();
      expect(currentUrl).toContain(href);

      // Navigate back to the menu page if needed
      await browser.back();
      await browser.pause(1000); // Let the page load before next iteration
    }
  });
});


 
 