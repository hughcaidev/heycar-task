# heycar Technical Task

This repo contains a UI automation solution to the heycar technical task. The repo uses Playwright for its framework and Typescript for its programming language. You need to have Node 24 and yarn installed.

To setup the repo, follow these simple steps:

1. Install dependencies (This install all dependencies, Playwright and all relevant browsers)

```bash
yarn setup
```

2. Run tests (This currently runs the tests in headless mode on Chromium only)

```bash
yarn test
```

3. Show report of latest run

```bash
yarn report
```

Currently, the only test in this repo is:

-   Product Page - _Clicking on the "Please select the address you want to ship to" CTA displays the address modal_
