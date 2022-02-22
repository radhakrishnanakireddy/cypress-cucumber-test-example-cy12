import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageobjects/home_page";

const homePage = new HomePage();

Given(/^I open the Amazon page$/, () => {
  cy.clearCookies();
  cy.visit(`/`);
});

When(/^I type the "([^"]*)"$/, (ASIN) => {
  homePage.typeInSearchBar(ASIN);
});

When(/^I click the search button$/, () => {
  homePage.clickSearchButton();
});

Then(
  /^The product which named is "([^"]*)" should be listed$/,
  (productName) => {
    homePage.getProductLinkText().then(($productLinkText) => {
      expect($productLinkText.text()).to.include(productName);
    });
  }
);
