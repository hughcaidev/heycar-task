import { expect, Locator, Page } from "@playwright/test"

export class ProductPage {
    private readonly page: Page
    private readonly addressToggle: Locator
    private readonly addressModal: Locator

    constructor(page: Page) {
        this.page = page
        this.addressToggle = this.page.locator("span", {
            hasText: "Please select the address you want to ship to",
        })
        this.addressModal = this.page.locator("#estimate-shipping-popup-17")
    }

    // Clicks on "Please select the address you want to ship to" CTA
    async clickOnAddressModalToggle() {
        await this.addressToggle.click()
    }

    // Checks that the address modal opens
    async checkAddressModalIsDisplayed() {
        await expect(this.addressModal).toBeVisible()
    }
}
