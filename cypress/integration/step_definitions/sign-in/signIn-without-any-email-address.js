import { Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageobjects/HomePage";
import SignInPage from "../../../support/pageobjects/SignInPage";

const homePage = new HomePage();
const signInPage = new SignInPage();

And(/^I click Sign in button$/, () => {
  homePage.clickSignInButton();
});

When(/^I click Continue button$/, () => {
  signInPage.clickContinueButton();
});

Then(/^I should see "([^"]*)" message$/, (message) => {
  signInPage.getAlertMessage().then(($alertMessage) => {
    expect($alertMessage.text().trim()).to.eq(message);
  });
});
