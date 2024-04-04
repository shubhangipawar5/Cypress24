

describe('contact sales page', () => {
    


    it('dashboard visible', () => {
        cy.login("Admin","admin123")   //orangehrmlogin
        cy.get('ul[class="oxd-main-menu"] li').first().click()
        cy.wait(5000)
        cy.contains('savi n').parent().prev().children().then(el=>{
            cy.log(el.text())
            if(el.text() == 'ESS'){
                cy.contains('savi n').parent().siblings().last().find('button').last().click({force:true})
            }
           
        })
    })

})