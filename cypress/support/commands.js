// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe';

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('button[type="submit"]').click()
    })
  })

Cypress.Commands.add('rslogin',()=>{
  cy.visit("https://rahulshettyacademy.com/client")
  cy.get('#userEmail').type('Sarika2@test.com')
  cy.get('#userPassword').type('@Minskole12')
  cy.get('#login').click()
})

Cypress.Commands.add('saveLocalStorage', () => {
  Cypress.log({
      message: 'Grabbing local storage and saving to variable.',
      displayName: 'SaveLocal'
  });
  
  Object.keys(localStorage).forEach(key => {
      LOCAL_STORAGE[key] = localStorage[key];
  });
});
const LOCAL_STORAGE = {} ;
Cypress.Commands.add('restoreLocalStorage', () => {
  Cypress.log({
      message: 'Grabbing local storage variable and setting.',
      displayName: 'SetLocal'
  });

  Object.keys(LOCAL_STORAGE).forEach(key => {
      localStorage.setItem(key, LOCAL_STORAGE[key]);
  });
});
Cypress.Commands.add('getAndSetToken', (email,password) => {
  Cypress.log({
      message: 'Requests token and sets in local storage.',
      displayName: 'GetToken'
  });
  cy.request({
      url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
      method: 'POST',
       body: {
                "userEmail": "Sarika2@test.com", "userPassword": "@Minskole12"
            
      }
  }).then(response => {
      const {
          token
      } = response.body.token;
      localStorage.setItem('jwt', token);
  });
});

  