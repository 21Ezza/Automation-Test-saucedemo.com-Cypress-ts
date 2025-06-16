describe('Checkout Process ', () => {

    it('User can fill in checkout information', () => {
        cy.login()
        cy.checkOut()

        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.get('[data-test="firstName"]').type('User')
        cy.get('[data-test="lastName"]').type('Test')
        cy.get('[data-test="postalCode"]').type('777')
        cy.get('[data-test="continue"]').contains('Continue').click()

    });

    it('User can cancel the process of filling in checkout information', () => {
        cy.login()
        cy.checkOut()

        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.get('[data-test="firstName"]').type('User')
        cy.get('[data-test="lastName"]').type('Test')
        cy.get('[data-test="postalCode"]').type('777')
        cy.get('[data-test="cancel"]').contains('Cancel').click()


    });

    it('User can complete the checkout process', () => {
        cy.login()
        cy.checkOut()

        cy.get('[data-test="checkout"]').contains('Checkout').click()
        cy.get('[data-test="firstName"]').type('User')
        cy.get('[data-test="lastName"]').type('Test')
        cy.get('[data-test="postalCode"]').type('777')
        cy.get('[data-test="continue"]').contains('Continue').click()
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="complete-header"]').contains('Thank you for your order!')
        cy.get('[data-test="complete-text"]').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        cy.get('[data-test="back-to-products"]').contains('Back Home').click()

    });
});