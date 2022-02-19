Feature: Search the product

  Background: Navigate to the Amazon Page
    Given I open the Amazon page

  Scenario: by ASIN
    #ASIN stands for Amazon Standard Identification Number
    When I type the "B08SJTX6PN"
    When I click the search button
    Then The product which named is "ASUS ROG Zephyrus" should be listed