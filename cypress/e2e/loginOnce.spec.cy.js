//https://www.cypress.io/blog/2021/08/04/authenticate-faster-in-tests-cy-session-command

describe('contact sales page', () => {
    beforeEach(() => {

        cy.login('Admin', 'admin123')

    })


    it('dashboard visible', () => {
        cy.wait((5000))
        cy.url().should('contain', 'dashboard')
    })

    it('leave list', () => {
        cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click()
    })
    it('time module', () => {
        cy.get('a[href="/web/index.php/time/viewTimeModule"').click()
        cy.url().should('contain', 'time')
    })
})