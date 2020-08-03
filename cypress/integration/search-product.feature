Feature: Search the product

  Scenario: with its ASIN

    #ASIN stands for Amazon Standard Identification Number

    Given I open the Amazon page
    When I type the "B07VF88TMR"
    When I click the search button
    Then The product which named is "ROG Zephyrus M" should be listed

  Scenario: with its model number

    Given I open the Amazon page
    When I type the "SM-R830NZKAXAR"
    When I click the search button
    Then "Samsung Galaxy Watch Active2" should be listed
