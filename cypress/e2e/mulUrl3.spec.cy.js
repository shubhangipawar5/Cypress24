//https://sep.com/blog/system-testing-multiple-deployment-environments-in-cypress-10/

//refer above configs


describe('get multiple environments', () => {
  const activeEnv = Cypress.env('deployment-env')
  it('change the environment at run time', () => {
    cy.visit("");
   cy.log(Cypress.env(activeEnv).bookId)
   cy.log(Cypress.env(activeEnv).bookName)
   //npx cypress open --env deployment-env=prod    // you can give any name to 'deployment-env' like 'ENV' also
  })
  it.only('change th baseurl at run time and env variables', () => {
    const url = Cypress.env(activeEnv).baseUrl
    cy.visit(url);
   cy.log(Cypress.env(activeEnv).bookId)
   cy.log(Cypress.env(activeEnv).bookName)
   //npx cypress open --env deployment-env=prod, --config baseUrl="https://www.google.com"
  })
})
