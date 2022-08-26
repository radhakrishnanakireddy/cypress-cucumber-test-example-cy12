require('./commands');

// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err) => {
  return false;
});
