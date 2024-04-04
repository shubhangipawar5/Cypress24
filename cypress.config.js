const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4pzs8b",

  e2e: {
    // baseUrl: "https://rahulshettyacademy.com/AutomationPractice/",
    baseUrl:"https://rahulshettyacademy.com/client",
    testIsolation: false,
    failOnStatusCode: false,
    screenshotsFolder: 'cypress/screenshots',
    failOnStatusCode: false,
  
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      dev: {

        bookId: "dev-123",
        bookName: "The Waves",
      },
      staging: {
        bookId: "staging-456",
        bookName: "Trees 101 Indiana",
      },
      prod: {

        bookId: "prod-789",
        bookName: "Pragmatic Programmer",
      }
    }

  },



});
