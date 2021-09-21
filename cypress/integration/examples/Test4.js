/// <reference types="Cypress" />

describe('My Test Suit', ()=>{

    it('Popups check test', ()=>{

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()
        cy.get('input[value = "Confirm"]').click()

        cy.on('window:alert', (str)=>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.wait(3000)
        
        cy.go('back')
        cy.url().should('include', 'Automation')
    })
})