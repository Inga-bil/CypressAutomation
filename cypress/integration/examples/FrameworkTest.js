/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'



describe('My Test Suit', ()=>{

    beforeEach(function(){

       cy.fixture('example').then(function(data){

        this.data = data

       })

        
    })
    

    it('Frames Handler test', function(){
        const homePage = new HomePage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoDataBinding().should('have.value', 'Inga')

        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneur().should('be.disabled')
        homePage.getShopTab().click()

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        
        
        

    

      })
    })


       
