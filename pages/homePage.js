export class HomePage {
  constructor(page) {
    this.page = page;

    this.addToCartBtn = '.add-to-cart-btn';
    this.cartIcon = '#cart-icon';
    this.whatsappBtn = 'button:has-text("Checkout on WhatsApp")';
  }

  async goto() {
    await this.page.goto('http://foodz.local/our-food-menu/');
  }

  async addToCart() {
    await this.page.locator(this.addToCartBtn).first().click();
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }

  async clickWhatsApp() {
    const btn = this.page.locator(this.whatsappBtn);

    await btn.waitFor({ state: 'visible' });
    await btn.click();
  }
}