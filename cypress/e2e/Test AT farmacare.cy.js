/// <reference types="cypress"/>



describe('Login', () => {
    it('Passed', () => {

        cy.visit('https://www.bookdepository.com/') //redirect to devel url
        cy.get('.icon-menu').click()
        cy.get('#mob-acc').click()
        cy.get('.nav-content-wrap > .right-nav > :nth-child(3) > a').click()
        cy.frameLoaded('.signin-iframe')
        cy.iframe('.signin-iframe')
        .find('#ap_email')
        .type('cratosgm7@gmail.com')
        cy.iframe('.signin-iframe')
        .find('#ap_password')
        .type('aliansis12')
        cy.iframe('.signin-iframe')
        .find('#signInSubmit')
        .click()
   


    })

})


describe('As a User, I should be able to sort price low to high', () => {
    it('Passed', () => {

        cy.visit('https://www.bookdepository.com/') //redirect to devel url
        cy.get('.text-input').type('one{enter}')//
        cy.get('.form-inline > .form-control').select("price_low_high").invoke("val").should("eq", "price_low_high")


    

    })

})


describe('As a User, I should be able to reduce value on cart', () => {
    it('Passed', () => {

        cy.visit('https://www.bookdepository.com/') //redirect to devel url
            cy.get(':nth-child(4) > .block > .carousel-wrap > .tab-wrap > .tab > :nth-child(1) > .item-actions > .btn-wrap > .btn').click()
                cy.wait(3000)
                    cy.get('.close > span').click()
        cy.get('.copy-content > .basket-wrap > .basket-btn > .icon-basket').click()
            cy.wait(2000)
                cy.get('#Qty_0').select('4').invoke('val').should("eq", "4")
                 cy.wait(4000)
                     cy.get('#Qty_0').select('2').invoke('val').should("eq", "2")
        

    
       //cy.get('#Qty_0').select('2').should('have.value', '2')

     })

})


describe('As a User, I should be able to bookmark product', () => {
    it('Passed', () => {

        cy.visit('https://www.bookdepository.com/') //redirect to devel url
        cy.get(':nth-child(4) > .block > .carousel-wrap > .tab-wrap > .tab > :nth-child(1) > .item-img > a > .lazy').click()
        cy.get('.btn-grey').click()
        cy.get('.close > span').click()








    })

})