describe('Tutorialspoint Test', function () {

    it('iframe1 with plugin', function () {
    //     cy.clearCookies()
    // cy.visit("https://www.airasia.com/en/gb",{
    //     onBeforeLoad: win => {
    //       win.sessionStorage.clear();
    //     }
    // })
    // cy.wait(10000)
    // cy.get('[id="flight-place-picker"]').eq(1).should('exist')



    // cy.visit("https://www.fireflyz.com.my/my/en/home.html")
    // cy.get('.cookie-accept-all-cta > .CTAButton').click()


    // cy.visit("https://www.tigerairtw.com/en")




    cy.visit("https://www.malaysiaairlines.com/my/en/home.html")
    cy.wait(8000)
    cy.contains("Accept all cookies").scrollIntoView().should("exist").dblclick({force:true})
    })

})