import { test as base, createBdd } from "playwright-bdd"
import { ProductPage } from "../../pageObjects/productPage"
import { ProductsPage } from "../../pageObjects/productsPage"

type fixtures = {
    productPage: ProductPage
    productsPage: ProductsPage
}

export const test = base.extend<fixtures>({
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page))
    },
    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page))
    },
})

export const { Given, When, Then } = createBdd(test)
