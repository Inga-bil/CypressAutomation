/// <reference types="Cypress" />
import HomePage from '../../../pageObjects/HomePage'
import ProductPage from '../../../pageObjects/ProductPage'

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage()
        const productPage = new ProductPage()
Given('I open EComerce page', ()=>{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

})
When('I add items to card', function(){

    homePage.getShopTab().click()

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })

    productPage.getCheckoutTab().click()


})

And('Validate the total prices', ()=>{
    productPage.getCheckoutTab().click()
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{

        const actualText = $el.text()
        var result = actualText.split(" ")
        result = result[1].trim()
        sum = Number(sum)+Number(result)
        
        
    }).then(function(){

        cy.log(sum)
    })

    cy.get('tr td:nth-child(5) strong').then(function(element){

        const actualResult = element.text()
        var res = actualResult.split(" ")
        res = res[1].trim()
        cy.log(res)
        expect(Number(res)).to.equal(Number(sum))
    })

})
Then('select the country submit and verify Thankyou message', ()=>{

    productPage.getConfirmCheckout().click()
    productPage.getCountry().type('India')
    productPage.getSelectedCountry().click()
    productPage.getCheckbox().check({force: true})
    cy.get("input[value='Purchase']").click()
    //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
        const actualText = element.text()

        expect(actualText.includes('Success')).to.be.true
})
})

When ('I fill the form details', function(){

homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
})

Then('Validate the form behaviour', function(){
    homePage.getTwoDataBinding().should('have.value', 'Inga')

        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneur().should('be.disabled')

})
And('Select the shop page', function(){

 homePage.getShopTab().click()
}) 

