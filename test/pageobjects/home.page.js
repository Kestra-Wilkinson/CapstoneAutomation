class HomePage extends Page {
  // 1. Search Bar
  get searchBarInput() {
    return $('input[aria-label="Search"]');
  }

  get searchSubmitButton() {
    return $('button[data-testid="search-submit"]');
  }

  // 2. Navigation Menu (example for "Camp & Hike")
  get navMenuCampHike() {
    return $('a[href*="/camp-hike"]');
  }

  // Grab all top nav menu links if you want to iterate over them
  get topNavLinks() {
    return $$('nav[aria-label="Top Categories"] a');
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

  // 4. Product Image Modal
  get productImage() {
    return $('img[alt*="Product image"]'); // Adjust alt if needed
  }

  get imageModal() {
    return $('div[data-testid="lightbox"]'); // Modal container
  }

  get modalCloseButton() {
    return $('button[aria-label="Close"]');
  }

  // Helper: visit homepage
  open() {
    return browser.url('https://www.rei.com/');
  }
}
export default new HomePage();