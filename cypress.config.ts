import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    baseUrl: 'https://www.saucedemo.com/',
  },
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },
});


