/// <reference types="Cypress" />

describe('My Test Suit', ()=>{

    it('Mouse Hover test', ()=>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

      cy.get('#opentab').then(function(el){

        const url = el.prop('href')
        cy.visit(url)


      })
    })
       
})


        