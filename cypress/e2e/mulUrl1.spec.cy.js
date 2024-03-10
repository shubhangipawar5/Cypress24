//https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
import { difurl } from "../support/util1"

const url = difurl.getBaseUrl();
describe('get multiple environments', () => {
  
  it.skip('way 1 with util1.js file', () => {
    cy.visit(url);
    // npx cypress open --env ENV='DEV'
    // npx cypress open --env ENV='QA'
    // npx cypress run --env ENV='DEV'
  })
})
