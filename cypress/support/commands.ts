let baseUrl = Cypress.env('baseUrl');

Cypress.Commands.add('login',()=>{
    cy.visit(`${baseUrl}`);
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').contains('Login').click()

    cy.url().should('include', '/inventory.html');
});