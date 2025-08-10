import { Page } from "@playwright/test"

export class ProductsPage {
    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    // Navigates to the products/shop page
    async goTo() {
        await this.page.goto("/camera-photo")
    }

    // Click on a product item card
    async clickOnProductItemCard(productName: string) {
        await this.page
            .getByRole("link", { name: productName, exact: true })
            .click()
    }
}
