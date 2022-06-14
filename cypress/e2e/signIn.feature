Feature: Sign in

  Background: Navigate to the Sign in Page
    Given I open the Amazon page
    And I click Sign in button

  Scenario: without using any email address
    When I click Continue button
    Then I should see "Enter your email or mobile phone number" message

  Scenario: using an invalid email address
    When I type the "unknownuser@testmail.com" in email address input
    When I click Continue button
    Then The message should be given to user as "We cannot find an account with that email address"
