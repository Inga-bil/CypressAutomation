/// <reference types="Cypress" />



describe('My Test Suit', ()=>{

    beforeEach(function(){

       cy.fixture('example').then(function(data){

        this.data = data

       })

        
    })
    

    it('Frames Handler test', function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(1)').should('have.value', 'Inga')

        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        
        
        

    

      })
    })


       
