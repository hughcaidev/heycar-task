// Contains all steps used in productPage.feature
import { Given, When, Then } from "./fixtures.ts"

Given("I land on {string}", async ({ page }, url) => {
    await page.goto(url)
})

When(
    "I click on the {string} product item card",
    async ({ productsPage }, productName) => {
        await productsPage.clickOnProductItemCard(productName)
    }
)

When("I click on {string}", async ({ page }, linkText) => {
    await page.getByText(linkText).click()
})

Then("the address modal appears", async ({ productPage }) => {
    await productPage.checkAddressModalIsDisplayed()
})
