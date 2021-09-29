Feature: End to End ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
    Given I open EComerce page
    When I add items to card
    And Validate the total prices
    Then select the country submit and verify Thankyou message

@Smoke
    Scenario: Filling the form to shop
    Given I open EComerce page
    When I fill the form details
    Then Validate the form behaviour
    And Select the shop page