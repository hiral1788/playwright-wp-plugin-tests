export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartTitle = 'text=Your Cart';
    this.productName = 'strong';
    this.total = 'text=Total:';
    this.checkoutBtn = 'button:has-text("Checkout on WhatsApp")';
  }

  async verifyCartVisible() {
    await this.page.locator(this.cartTitle).waitFor({ state: 'visible' });
  }

  async verifyProductName(name) {
    await this.page.locator(`text=${name}`).waitFor();
  }

  async verifyTotalAmount(amount) {
    await this.page.locator(`text=${amount}`).waitFor();
  }

  async clickCheckout() {
    await this.page.click(this.checkoutBtn);
  }
}