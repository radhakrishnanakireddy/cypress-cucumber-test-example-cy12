import { faker } from '@faker-js/faker';

class SignInPage {
  typeRandomEmailAddress() {
    const emailAddress = faker.internet.email();
    cy.get('#ap_email')
      .should('be.empty')
      .focus()
      .type(emailAddress)
      .should('have.value', emailAddress);
  }

  clickContinueButton() {
    cy.get('#continue').should('be.visible').click();
  }

  getAlertMessage() {
    cy.get('#auth-email-missing-alert')
      .find('.a-alert-content')
      .should('be.visible')
      .as('alertMessage');
  }

  getErrorMessage() {
    cy.get('#auth-error-message-box').find('.a-list-item').should('be.visible').as('errorMessage');
  }
}

export default new SignInPage();
