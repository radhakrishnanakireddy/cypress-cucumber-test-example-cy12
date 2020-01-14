Feature: Search the product

  Scenario: Search the product with its ASIN

    #ASIN stands for Amazon Standard Identification Number

    Given I open Amazon page
    When I type ASIN
    When I click search button
    Then The product related ASIN should be listed