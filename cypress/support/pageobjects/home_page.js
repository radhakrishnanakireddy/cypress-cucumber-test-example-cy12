class HomePage {
  clickSignInButton() {
    cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner')
      .as('signInButton')
      .trigger('mouseover')
      .should('be.visible')
      .click({ force: true });
  }
}

export default new HomePage();
