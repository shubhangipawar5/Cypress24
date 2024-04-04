
//https://www.youtube.com/watch?v=aXNOauzB-k0&t=2s

describe('loginonce', () => {
    before(() => {
        cy.clearAllLocalStorage()
   
    cy.rslogin()
     cy.saveLocalStorage()
    
    
     })

    it('uilogin', () => {
        cy.restoreLocalStorage()
         cy.visit('/')
         cy.url().should('contain','dash')
         cy.get('#sidebar > form.ng-untouched > :nth-child(3) > :nth-child(3) > input').check()
         cy.get('button.btn.btn-custom').eq(1).click()
         cy.url().should('contain','order')
        
       

    })
    it('2', () => {
        cy.restoreLocalStorage()
        cy.visit('/')
        

    })

})

