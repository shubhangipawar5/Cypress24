//https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments


const url = Cypress.config().baseUrl;
describe('get multiple environments', () => {
  let url = Cypress.config().baseUrl;
  beforeEach(() => {


    cy.session([Cypress.env('username'), Cypress.env('password')], () => {
      cy.visit(url)
      cy.get('input[name="username"]').type(Cypress.env('username'))
      cy.get('input[name="password"]').type(Cypress.env('password'))
      cy.get('button[type="submit"]').click()
    })
  })


  it('way 2 with config file', () => {
    // cy.visit(url);
    cy.wait((5000))
    cy.log(Cypress.env('username'))
    cy.url().should('include', 'orangehrm')
    //npx cypress open --config-file config/qa.config.js
    //npx cypress open --config-file config/dev.config.js
    //npx cypress run --config-file config/qa.config.js
    //npx cypress run --headed --browser chrome --spec cypress/e2e/mulurl2.spec.cy.js --config-file config/qa.config.js   //this will teporarily give UI look and will run on cli
    //if you do not want to provide testisolation in ur config file then use-
    ///npx cypress open --config-file config/dev.config.js --config testIsolation=false
    //or provide testisolation in your any current reffering config file
  })
})


//https://dev.to/samelawrence/how-to-test-in-multiple-environments-in-cypress-10-1i9h

//https://www.bigbinary.com/blog/cypress-environment-config

//https://glebbahmutov.com/blog/load-cypress-env-settings/

//https://www.programsbuzz.com/article/configure-cypress-tests-run-multiple-environments-using-separate-configuration-files

//https://sep.com/blog/system-testing-multiple-deployment-environments-in-cypress-10/

//