describe('Sorting Functionality ', () => {

    it('User can sort items from A to Z', () => {

        cy.login()
        cy.get('[data-test="product-sort-container"]').select('az');   // Name (A to Z)

        cy.get('[data-test="inventory-item-name"]').then(($items) => {
            const actualNames = $items.toArray().map((el) => el.textContent?.trim() || '');
            const sortedNames = [...actualNames].sort((a, b) => a.localeCompare(b));
            expect(actualNames).to.deep.equal(sortedNames);
        });

    });

    it('User can sort items from Z to A', () => {

        cy.login()
        cy.get('[data-test="product-sort-container"]').select('za');   // Name (A to Z)

        cy.get('[data-test="inventory-item-name"]').then(($items) => {
            const actualNames = $items.toArray().map((el) => el.textContent?.trim() || '');
            const sortedDesc = [...actualNames].sort((a, b) => b.localeCompare(a));
            expect(actualNames).to.deep.equal(sortedDesc);
        });

    });

    it('User can sort items by price from low to high', () => {

        cy.login()
        cy.get('[data-test="product-sort-container"]').select('lohi');   // Name (A to Z)

        cy.get('[data-test="inventory-item-price"]').then(($prices) => {
            const actualPrices = $prices.toArray().map((el) => {
                const text = el.textContent?.trim().replace('$', '') || '0';
                return parseFloat(text);
            });

            const sortedPrices = [...actualPrices].sort((a, b) => a - b);

            expect(actualPrices).to.deep.equal(sortedPrices);
        });

    });

    it('User can sort items by price from high to low', () => {

        cy.login()
        cy.get('[data-test="product-sort-container"]').select('hilo');   // Name (A to Z)

        cy.get('[data-test="inventory-item-price"]').then(($prices) => {
            const actualPrices = $prices.toArray().map((el) => {
                const text = el.textContent?.trim().replace('$', '') || '0';
                return parseFloat(text);
            });
            const sortedPrices = [...actualPrices].sort((a, b) => b - a); // Descending
            expect(actualPrices).to.deep.equal(sortedPrices);
        });

    });


});