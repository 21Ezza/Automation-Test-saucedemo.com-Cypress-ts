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
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Backpack')
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').contains('$29.99')
        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Fleece Jacket')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').contains('$49.99')
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').contains('$9.99')


    });

    it('Remove items after viewing the shopping cart', () => {
        cy.login()

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()

        cy.get('[data-test="continue-shopping"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-badge"]').contains(3)

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()

        cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Fleece Jacket')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').contains('$49.99')
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').contains('Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').contains('$9.99')


    });

});