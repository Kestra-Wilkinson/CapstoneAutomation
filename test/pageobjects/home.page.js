class HomePage {
  // 1. Search Bar
  get searchBarInput() {
    return $('.search_input');
  }
  get searchResults() {
    return $$('.search-result'); // use $$ for multiple elements
}
  get searchSubmitButton() {
    return $('icon-button search__search-button');
  }
  // 2. Navigation Menu (example for "Camp & Hike")
  get CampHike() {
    return $('a[href="/h/camping-and-hiking"]');
  }
    get HikingcategoryLink() {
    return $('a[href="/h/hiking"]');
    }
   get PadsHammockscategoryLink() {
    return $('a[href="/c/sleeping-gear"]');
   }
  get LightingcategoryLink() {
    return $('a[href="/c/camp-lighting"]');
  }
   get BackpackscategoryLink() {
    return $('a[href="/c/hiking-backpacks"]');
   }
   get CampKitchencategoryLink() {
    return $('a[href="/c/camp-kitchen"]');
   }
   get hikingFootwearLink() {
    return $('a[href="/c/hiking-footwear"]');
  }
  get hikingJacketsLink() {
    return $('a[href="/c/hiking-jackets"]');
  }
  get hikingShirtsLink() {
    return $('a[href="/c/hiking-shirts"]');
  }
  get hikingPantsLink() {
    return $('a[href="/c/hiking-pants"]');
  }
  get hikingShortsLink() {
    return $('a[href="/c/hiking-shorts"]');
  }
  get hikingSocksLink() {
    return $('a[href="/c/hiking-socks"');
  }
  get hikingCategoryLinks() {
    return [
      this.hikingFootwearLink,
      this.hikingJacketsLink,
      this.hikingShirtsLink,
      this.hikingPantsLink,
      this.hikingShortsLink,
      this.hikingSocksLink
    ];
  }

  get navMenuMen() {
    return $('a[href*="/mens"]');
  }
  get navMenuWomen() {
    return $('a[href*="/womens"]');
  }
  // 3. Product Listing Filter (e.g., Brand filter sidebar)
  get filterSidebar() {
    return $('aside[aria-label="Refine results"]');
  }
  get brandFilterToggle() {
    return $('button[aria-controls*="brand"]');
  }
  get firstBrandCheckbox() {
    return $('input[type="checkbox"][id^="brand-"]'); // Use more specific ID if needed
  }
  get priceRangeFilter() {
    return $('input[name="price-range"]');
  }
  get ratingFilter() {
    return $('input[name="rating"]'); // Filter for rating
  }
  get availabilityFilter() {
    return $('input[name="availability"]'); // Filter for availability
  }
  get colorFilter() {
    return $('input[name="color"]'); // Color filter
  }
  get sizeFilter() {
    return $('input[name="size"]'); // Size filter
  }
  // 4. Product Listings
  get productList() {
    return $$('ul[data-testid="product-list"] li'); // :white_check_mark: returns array of products
  }
  get product() {
    return $('a[href="/product/243702/rei-co-op-half-dome-2-tent-with-footprint"]');
  }
  // 5. Product Image Modal
  get productImage() {
    return $('img[alt*="Product image"]'); // Adjust alt if needed
  }
  get imageModal() {
    return $('div[data-testid="lightbox"]'); // Modal container
  }
  get modalCloseButton() {
    return $('button[aria-label="Close"]');
  }
  // 6. Shopping Cart
  get shoppingCart() {
    return $('a[href="/ShoppingCart"]'); // Fixed the selector
  }
  get shoppingCartIcon() {
    return $('svg[data-testid="shopping-cart-icon"]'); // Icon for shopping cart
  }
  get cartItemCount() {
    return $('span[data-testid="cart-item-count"]'); // Item count on cart
  }
  // 7. Size Option
  get sizeOption() {
    return $('#size-dropdown'); // Ensure this matches the actual element
  }
  get firstSize() {
    return $('.dropdown__select');
  }
  // 8. Add to Cart
  get addToCartButton() {
    return $('button[data-testid="add-to-cart-button"]');
  }
  get addToCartNotification() {
    return $('div[data-testid="add-to-cart-notification"]');
  }
  // 9. Home Logo
  get homeLogo() {
    return $('a[data-testid="rei-logo"]');
  }
  // Helper: visit homepage
  async open() {
    return browser.url('https://www.rei.com/');
  }
  // Helper Method to Click on a Brand Filter
  async applyBrandFilter(brandName) {
    await this.brandFilterToggle.click();
    const brandCheckbox = await $(`input[type="checkbox"][id^="brand-${brandName}"]`);
    if (await brandCheckbox.isDisplayed()) {
      await brandCheckbox.click();
    }
  }
  // Helper Method to Add Product to Cart
  async addProductToCart() {
    if (await this.sizeOption.isDisplayed()) {
      await this.sizeOption.click();
    }
    if (await this.addToCartButton.isDisplayed()) {
      await this.addToCartButton.click();
    }
  }
  // Helper Method to Open Product from Listing
  async openProductFromListing(index = 0) {
    const product = await this.productList[index];
    await product.click();
  }
  // Helper Method to Close Modal
  async closeModal() {
    if (await this.imageModal.isDisplayed()) {
      await this.modalCloseButton.click();
    }
  }
  async clickAllHikingCategoryLinks() {
    for (const link of this.hikingCategoryLinks) {
      if (await link.isDisplayed()) {
        await link.click();
        await browser.pause(2000);
        await this.open();
      }
    }
  }

  async enterSearchTerm(term) {
    await this.searchInput.setValue('hiking boots');
    await this.searchInput.setValue('tents');
    await this.searchInput.setValue('sleeping bags');
    await this.searchInput.setValue('hydro flask');
    await this.searchInput.setValue('water bottles');
    await this.searchInput.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    await this.searchInput.setValue('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
 
  }
  async expectResultsToShow() {
    await expect(this.searchResults[0]).toBeDisplayed(); // assumes at least one result
}

}
export default new HomePage();
