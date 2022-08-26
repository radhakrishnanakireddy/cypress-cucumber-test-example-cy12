class HomePage {
  clickSignInButton() {
    cy.get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner')
      .as('signInButton')
      .trigger('mouseover')
      .should('be.visible')
      .click();
  }
}

export default new HomePage();
