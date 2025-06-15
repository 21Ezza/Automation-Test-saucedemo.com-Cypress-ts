describe('Authentication', () => {
    let baseUrl = Cypress.env('baseUrl');

    it('Login', () => {
        cy.visit(`${baseUrl}`);
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').contains('Login').click()

        cy.url().should('include', '/inventory.html');
    });

    it('As a user, I cannot log in with invalid credentials', () => {
        cy.visit(`${baseUrl}`);
        cy.get('[data-test="username"]').type('user')
        cy.get('[data-test="password"]').type('12345')
        cy.get('[data-test="login-button"]').contains('Login').click()

        cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
        cy.url().should('include', '/');
    });

    it('As a user, I cannot log in without a username & password', () => {
        cy.visit(`${baseUrl}`);

        cy.get('[data-test="login-button"]').contains('Login').click()

        cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
        cy.url().should('include', '/');
    });
});