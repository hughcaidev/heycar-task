// Contains all steps used in productPage.feature

import { expect } from "@playwright/test"
import { createBdd } from "playwright-bdd"

const { Given, When, Then } = createBdd()

Given("I land on {string}", async ({ page }, url) => {
    await page.goto(url)
})

When("I click on any product item card", async ({ page }) => {
    await page.getByText("Apple iCam").click()
})

When("I click on {string} CTA", async ({ page }, buttonText) => {
    await page.getByText(buttonText).click()
})

Then("the address modal appears", async ({ page }) => {
    await expect(page.locator("#estimate-shipping-popup-17")).toBeVisible()
})
