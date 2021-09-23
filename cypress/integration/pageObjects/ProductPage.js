class ProductPage
{
    getCheckoutTab()
    {
       // return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
       return cy.contains('Checkout')
    }

    getConfirmCheckout()
    {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }

    getCountry()
    {
        return cy.get('#country')
    }

    getSelectedCountry()
    {
        return cy.get('.suggestions > :nth-child(1) > li > a')
    }

    getCheckbox()
    {
        return cy.get('#checkbox2')
    }

}

export default ProductPage