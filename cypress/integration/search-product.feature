Feature: Search the product

  Scenario: Search the product with its ASIN

    #ASIN stands for Amazon Standard Identification Number

    Given I open the Amazon page
    When I type the "B07VF88TMR"
    When I click the search button
    Then The product which named is "ROG Zephyrus M" should be listed