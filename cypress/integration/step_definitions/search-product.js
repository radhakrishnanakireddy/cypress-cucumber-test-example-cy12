import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";

const BASE_URL = `https://www.amazon.com`;
const ASIN = `B07VF88TMR`;
const PRODUCT_NAME = `ROG Zephyrus M`;
const SEARCH_BAR = `#twotabsearchtextbox`;
const SEARCH_BUTTON = `.nav-search-submit > .nav-input`;
const PRODUCT_LINK_TEXT = `.a-size-medium`;


Given(/^I open Amazon page$/, () => {
    cy.visit(BASE_URL)
});
When(/^I type ASIN$/, () => {
    cy.get(SEARCH_BAR).type(ASIN)
});
When(/^I click search button$/, () => {
    cy.get(SEARCH_BUTTON).click()
});
Then(/^The product related ASIN should be listed$/, () => {
    cy.get(PRODUCT_LINK_TEXT).should(`contain`, PRODUCT_NAME)
});