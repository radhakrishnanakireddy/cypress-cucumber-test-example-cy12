class SignInPage {
  typeEmailAddress(emailAddress) {
    return cy
      .get("#ap_email")
      .focus()
      .type(emailAddress)
      .should("have.value", emailAddress);
  }

  clickContinueButton() {
    return cy.get(".a-button-inner > #continue").click({ force: true });
  }

  getAlertMessage() {
    return cy.get("#auth-email-missing-alert").as("alertMessage");
  }

  getErrorMessage() {
    return cy.get(".a-list-item").as("errorMessage");
  }
}

export default SignInPage;
