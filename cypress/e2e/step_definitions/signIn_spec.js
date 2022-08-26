import { Given, Then, When, And } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../support/pageobjects/home_page';
import signInPage from '../../support/pageobjects/signIn_page';

Given(/^open the ([^"]*) page$/, (page) => {
  cy.visit('/');
  cy.title().should('include', page);
});

And(/^click on sign in button$/, () => {
  homePage.clickSignInButton();
});

When(/^click on continue button$/, () => {
  signInPage.clickContinueButton();

  cy.location().should((location) => {
    expect(location.pathname).contains('signin');
  });
});

Then(/^The alert message should be given to user as ([^"]*)$/, (message) => {
  signInPage.getAlertMessage();
  cy.get('@alertMessage').should(($el) => expect($el.text().trim()).to.equal(message));
});

When(/^type any email address$/, () => {
  signInPage.typeRandomEmailAddress();
});

Then(/^The error message should be given to user as ([^"]*)$/, (message) => {
  signInPage.getErrorMessage();
  cy.get('@errorMessage').should(($el) => expect($el.text().trim()).to.equal(message));
});
