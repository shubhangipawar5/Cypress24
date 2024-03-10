// step 1. -> import 'cypress-iframe';
//step 2. supoort-commands-> import 'cypress-iframe';


describe('Tutorialspoint Test', function () {

    it('iframe1 with plugin', function () {
        // launch URL
        cy.visit("https://jqueryui.com/draggable/");
        // frame loading
        cy.frameLoaded('.demo-frame');
        //shifting focus
        cy.iframe().find("#draggable").then(function (t) {
            const frmtxt = t.text()
            //assertion to verify text
            expect(frmtxt).to.contains('Drag me around');
            cy.log(frmtxt);
        })
    });
    it.only('iframe2 without plugin', function () {

        cy.visit("https://jqueryui.com/draggable/");

        cy.get('.demo-frame').then(($iframe) => {
            let body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find("#draggable").then(function (t) {
            const frmtxt = t.text()
            //assertion to verify text
            expect(frmtxt).to.contains('Drag me around');
            cy.log(frmtxt);

        })
    });
});