class HomePage {
  clickSignInButton() {
    return cy
      .get('#nav-signin-tooltip > .nav-action-button > .nav-action-inner')
      .should('be.visible')
      .click();
  }
}

export default HomePage;
