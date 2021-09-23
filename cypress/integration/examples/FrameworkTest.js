/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'



describe('My Test Suit', ()=>{

    beforeEach(function(){

       cy.fixture('example').then(function(data){

        this.data = data

       })

        
    })
    

    it('Frames Handler test', function(){
        
        const homePage = new HomePage()
        const productPage = new ProductPage()
      

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

        productPage.getCheckoutTab().click()
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
        /*cy.get('#country').each(($el, index, $list) =>{
            const countryName = $el.find('.suggestions > :nth-child(1) > li > a').text()
            if(countryName.includes('India'))
            {
                $el.click()
            }
        }) */



        
        
        

    

      })
    })


       
