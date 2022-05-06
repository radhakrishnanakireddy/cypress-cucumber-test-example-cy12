import { Given, Then, When, And } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../../support/pageobjects/home_page';
import SignInPage from '../../../support/pageobjects/signIn_page';

const homePage = new HomePage();
const signInPage = new SignInPage();

Given(/^I open the Amazon page$/, () => {
  cy.visit(`/`);
});

And(/^I click Sign in button$/, () => {
  homePage.clickSignInButton().then(() => {
    cy.location().should((location) => {
      expect(location.pathname).contains('signin');
    });
  });
});

When(/^I click Continue button$/, () => {
  signInPage.clickContinueButton();
});

Then(/^I should see "([^"]*)" message$/, (message) => {
  signInPage.getAlertMessage().then(($alertMessage) => {
    expect($alertMessage.text().trim()).to.eq(message);
  });
});
