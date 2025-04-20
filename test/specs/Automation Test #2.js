import { $, browser, expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';


describe('REI Website Searchbar Functionality Test', () => {
    it('should perform a searchbar test on REI site and verify search results', async () => {
        await browser.url('https://www.rei.com/');

        for (const term of homePage.SearchTerm) {
            await homePage.searchFor(term);
            await expect(homePage.searchResults).toBeDisplayed();
            await browser.pause(2000);
        }
    });
});

        
    


describe('REI Hiking Category Menu Link Validation', () => {
    it('should iterate through Hiking category Links and verify the endpoint', async () => {
         
        for (const link of homePage.hikingCategoryLinks)
            if (await link.isDisplayed()) {
              await link.click();
              await browser.pause(2000);
              await homePage.open()
            await expect(homePage.hikingCategoryLinks).toBeDisplayed();
            }
 
         });
  });
        
    
 



        
        

    

 
 
