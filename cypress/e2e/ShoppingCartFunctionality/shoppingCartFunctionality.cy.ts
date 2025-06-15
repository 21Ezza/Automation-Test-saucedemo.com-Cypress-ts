describe('Shopping Cart Functionality', () => {
    let baseUrl = Cypress.env('baseUrl');

    it('Add an item to the cart', () => {
        cy.login()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-badge"]').contains(2)
    });

    it('Remove an item from the cart', () => {
        cy.login()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-badge"]').contains(1)
    });

    it('Add more items after viewing the shopping cart', () => {
        cy.login()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').contains(3)

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack')
        cy.get('[data-test="inventory-item-price"]').contains('$29.99')

    });
});