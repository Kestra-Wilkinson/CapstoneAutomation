import { $, browser, expect } from '@wdio/globals';

// describe('REI Website 10 Actions Test', () => {
//   it('should perform multiple actions on the REI site', async () => {
//     // 1. Open the homepage
//     await browser.url('https://www.rei.com');

//     // 2. Type in search box
//     const searchInput = await $('.search__input');
//     await searchInput.setValue('tents');
//     await browser.keys('Enter');

//     // 3. Click a few categories (e.g., Men’s Footwear)
//     const categoryLink = await $('=Men\'s Footwear');
//     if (await categoryLink.isDisplayed()) {
//       await categoryLink.click();
//     }

//     // 4. Click on a product
//     const product = await $('li[data-testid="product-card"] a[data-testid="product-card-link"]');
//     if (await product.isDisplayed()) {
//       await product.click();
//     }

//     // 5. Open image modal
//     const imageThumbnail = await $('button[aria-label^="Enlarge image"]');
//     if (await imageThumbnail.isDisplayed()) {
//       await imageThumbnail.click();
//     }

//     // 6. Close image modal
//     const closeModal = await $('button[aria-label="Close"]');
//     if (await closeModal.isDisplayed()) {
//       await closeModal.click();
//     }

//     // 7. Add to cart
//     const sizeOption = await $('button[data-testid="size-selector-button"]');
//     if (await sizeOption.isDisplayed()) {
//       await sizeOption.click();

//       const firstSize = await $('ul[role="listbox"] li button');
//       await firstSize.click();
//     }

//     const addToCart = await $('button[data-testid="add-to-cart-button"]');
//     if (await addToCart.isDisplayed()) {
//       await addToCart.click();
//     }

//     // 8. Scroll down
//     await browser.execute(() => window.scrollBy(0, 1000));

//     // 9. Scroll up
//     await browser.execute(() => window.scrollBy(0, -1000));

//     // 10. Return to homepage
//     const homeLogo = await $('a[data-testid="logo"]');
//     if (await homeLogo.isDisplayed()) {
//       await homeLogo.click();
//     }
//   });
// });


describe ('REI Website searchBar Functionality Test',  () => {
  it('should perform a searchbar Functionality test', async () => {
    await browser.url('https://www.rei.com');

    const searchInput = await $('.search__input');
    await searchInput.setValue('hiking boots');
    await browser.keys('Enter');


     });
});
