/// <reference types="Cypress" />

describe('My Test Suit', ()=>{

    it('Mouse Hover test', ()=>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

       //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')

    })
       
})


        