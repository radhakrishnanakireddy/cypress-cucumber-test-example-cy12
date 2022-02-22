import { Then, When } from "cypress-cucumber-preprocessor/steps";
import SignInPage from "../../../support/pageobjects/signIn_page";

const signInPage = new SignInPage();

When(/^I type the "([^"]*)" in email address input$/, (emailAddress) => {
  signInPage.typeEmailAddress(emailAddress);
});

Then(/^The message should be given to user as "([^"]*)"$/, (message) => {
  signInPage.getErrorMessage().then(($errorMessage) => {
    expect($errorMessage.text().trim()).to.eq(message);
  });
});
