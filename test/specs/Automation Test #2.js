import { $, browser, expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
describe('REI Website Searchbar Functionality Test', () => {
    it('should perform a searchbar test on REI site and verify the search result', async () => {
        await browser.url('https://www.rei.com');
       
      
        await browser.keys('Enter');
         
    });
});



describe('REI Hiking Category Menu Link Validation', () => {
    it('should iterate through Hiking category Links and verify the endpoint', async () => {
        });
    });


 
 
