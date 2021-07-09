import { Then } from "cypress-cucumber-preprocessor/steps";

Then(/^"([^"]*)" should be listed$/, (productName) => {
  cy.get(`.a-size-medium`).as(`productLinkText`);
  cy.get(`@productLinkText`).then(($productLinkText) => {
    expect($productLinkText.text()).contains(productName);
  });
});
