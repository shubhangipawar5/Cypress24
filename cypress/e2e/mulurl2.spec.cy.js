//https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments


const url = Cypress.config().baseUrl;
describe('get multiple environments', () => {
  
  it('way 2 with config file', () => {
    cy.visit(url);
    cy.log(Cypress.env('username'))
    //npx cypress open --config-file config/qa.config.js
    //npx cypress open --config-file config/dev.config.js
    //npx cypress run --config-file config/qa.config.js
    //npx cypress run --headed --browser chrome --spec cypress/e2e/mulurl2.spec.cy.js --config-file config/qa.config.js
  })
})


//https://dev.to/samelawrence/how-to-test-in-multiple-environments-in-cypress-10-1i9h

//https://www.bigbinary.com/blog/cypress-environment-config

//https://glebbahmutov.com/blog/load-cypress-env-settings/

//https://www.programsbuzz.com/article/configure-cypress-tests-run-multiple-environments-using-separate-configuration-files