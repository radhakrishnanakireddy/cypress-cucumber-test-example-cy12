Feature: Sign in

  Scenario: without any email address

    Given I open the Amazon page
    When I click Sign in button
    When I click Continue button
    Then I should see "Enter your email or mobile phone number" message

  Scenario: with an invalid email address

    Given I open the Amazon page
    When I click Sign in button
    When I type the "unknownuser@testmail.com" in email address input
    When I click Continue button
    Then The message should be given to user as "We cannot find an account with that email address"
