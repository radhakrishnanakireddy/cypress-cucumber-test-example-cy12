import { Then, When } from "cypress-cucumber-preprocessor/steps";

When(/^I type the "([^"]*)" in email address input$/, (emailAddress) => {
  cy.get(`#ap_email`).as(`emailAddressInput`);
  cy.get(`@emailAddressInput`).type(emailAddress);
});

Then(/^The message should be given to user as "([^"]*)"$/, (message) => {
  cy.get(`.a-list-item`).as(`errorMessage`);
  cy.get(`@errorMessage`).then(($errorMessage) => {
    expect($errorMessage.text().trim()).to.eq(message);
  });
});
