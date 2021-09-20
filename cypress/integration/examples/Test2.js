/// <reference types="Cypress" />
describe('My second test suit', ()=>{


    it('Test case 1', ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("c")
        cy.wait(2000)
       
    
        cy.get('.products').as('productsLocator')
        
        cy.get('@productsLocator').find('.product').each(($el, index, $list) =>{
    
            const vegName = $el.find('h4.product-name').text()
            if (vegName.includes('Corn'))
            {
                $el.find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()
    
       
    
      
    })
    
    
    
    
    })