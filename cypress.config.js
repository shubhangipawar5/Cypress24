const { defineConfig } = require("cypress");

module.exports = defineConfig({


  e2e: {
    baseUrl: "https://rahulshettyacademy.com/AutomationPractice/",
    testIsolation: false,
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
