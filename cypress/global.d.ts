declare namespace Cypress {
    interface Chainable<Subject> {
        login(): Chainable<any>;
        checkOut(): Chainable<any>;
    }
}