/// <reference types="Cypress" />

describe('My Test Suit', ()=>{

    it('Popups check test', ()=>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{

            



        })
       
    })
})