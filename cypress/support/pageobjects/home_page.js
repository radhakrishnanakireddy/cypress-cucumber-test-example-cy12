class HomePage {
  clickSignInButton() {
    cy.get("div[id='nav-signin-tooltip'] span[class='nav-action-inner']")
      .as('signInButton')
      .click({ force: true });
  }
}

export default new HomePage();
