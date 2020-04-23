Feature: Sign in

  Scenario: With empty email address

    Given I open the Amazon page
    When I click Sign in button
    When I click Continue button
    Then I should see "Enter your email or mobile phone number" message
