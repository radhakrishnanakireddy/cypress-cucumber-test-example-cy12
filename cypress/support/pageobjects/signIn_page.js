class SignInPage {
  typeEmailAddress(emailAddress) {
    return cy
      .get('#ap_email')
      .should('be.empty')
      .focus()
      .type(emailAddress)
      .should('have.value', emailAddress);
  }

  clickContinueButton() {
    return cy.get('.a-button-inner > #continue').should('be.visible').click({ force: true });
  }

  getAlertMessage() {
    return cy.get('#auth-email-missing-alert').should('be.visible').as('alertMessage');
  }

  getErrorMessage() {
    return cy.get('.a-list-item').should('be.visible').as('errorMessage');
  }
}

export default SignInPage;
