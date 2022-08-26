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
    cy.get('.a-button-inner > #continue').should('be.visible').click({ force: true });
  }

  getAlertMessage() {
    cy.get('#auth-email-missing-alert').should('be.visible').as('alertMessage');
  }

  getErrorMessage() {
    cy.get('.a-list-item').should('be.visible').as('errorMessage');
  }
}

export default new SignInPage();
