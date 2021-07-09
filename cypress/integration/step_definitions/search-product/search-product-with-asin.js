import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given(/^I open the Amazon page$/, () => {
  cy.clearCookies();
  cy.visit(`/`);
});

When(/^I type the "([^"]*)"$/, (ASIN) => {
  cy.get(`#twotabsearchtextbox`).as(`searchBar`);
  cy.get(`@searchBar`).focus().type(ASIN);
});

When(/^I click the search button$/, () => {
  cy.get(`#nav-search-submit-button`).as(`searchButton`);
  cy.get(`@searchButton`).click();
});

Then(
  /^The product which named is "([^"]*)" should be listed$/,
  (productName) => {
    cy.get(`.a-size-mini`).as(`productLinkText`);
    cy.get(`@productLinkText`).should(`contain`, productName);
  }
);
