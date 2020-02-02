import {Then, When} from "cypress-cucumber-preprocessor/steps";

When(/^I click Sign in button$/, () => {

    cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner')
        .as(`signInButton`);

    cy.get(`@signInButton`).click()
});
When(/^I click Continue button$/, () => {

    cy.get(`.a-button-inner > #continue`)
        .as(`continueButton`);

    cy.get(`@continueButton`).click()
});
Then(/^I should see "([^"]*)" message$/, (message) => {

    cy.get(`#auth-email-missing-alert > .a-box-inner > .a-alert-content`)
        .as(`alertMessage`);

    cy.get(`@alertMessage`)
        .then($alertMessage => {
            expect($alertMessage.text().trim('\n')).to.equal(message)
        })
});