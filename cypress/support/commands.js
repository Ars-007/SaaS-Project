import 'cypress-iframe';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});
