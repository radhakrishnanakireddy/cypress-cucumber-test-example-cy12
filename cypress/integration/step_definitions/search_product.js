import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

const SEARCH_BAR = `#twotabsearchtextbox`;
const SEARCH_BUTTON = `.nav-search-submit > .nav-input`;
const PRODUCT_LINK_TEXT = `.a-size-medium`;

Given(/^I open the Amazon page$/, () => {
    cy.visit(`/`)
});
When(/^I type the "([^"]*)"$/, (ASIN) => {
    cy.get(SEARCH_BAR).focus().type(ASIN)

});
When(/^I click the search button$/, () => {
    cy.get(SEARCH_BUTTON).click()

});
Then(/^The product which named is "([^"]*)" should be listed$/, (PRODUCT_NAME) => {
    cy.get(PRODUCT_LINK_TEXT).should(`contain`, PRODUCT_NAME)
});