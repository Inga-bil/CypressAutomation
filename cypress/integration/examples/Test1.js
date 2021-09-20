/// <reference types="Cypress" />
describe('My first test suit', ()=>{


it('Test case 1', ()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type("c")
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 7)

    cy.get('.products').as('productsLocator')
    cy.get('@productsLocator').find('.product').should('have.length', 7)
    cy.get('@productsLocator').find('.product').eq(3).contains('ADD TO CART').click().then(function() 
    {
        console.log('hello')
    })

    
    cy.get('@productsLocator').find('.product').each(($el, index, $list) =>{

        const vegName = $el.find('h4.product-name').text()
        if (vegName.includes('Corn'))
        {
            $el.find('button').click()
        }


    })

    cy.get('.brand').should('have.text','GREENKART')

    cy.get('.brand').then(function(getlogo){


        cy.log(getlogo.text())

    })
})




})