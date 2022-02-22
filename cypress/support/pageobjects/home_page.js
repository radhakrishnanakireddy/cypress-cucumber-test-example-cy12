class HomePage {
  clickSignInButton() {
    return cy
      .get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner")
      .click();
  }

  typeInSearchBar(ASIN) {
    return cy
      .get("#twotabsearchtextbox")
      .focus()
      .type(ASIN)
      .should("have.value", ASIN);
  }

  clickSearchButton() {
    return cy.get("#nav-search-submit-button").click({ force: true });
  }

  getProductLinkText() {
    return cy.get(".a-size-mini").as("productLinkText");
  }
}

export default HomePage;
