describe('Product Search Module', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/shop');
    });

    it('should display search input, sort select, price slider and clean filters button', () => {
        cy.get('input[placeholder="Search..."]').should('be.visible');
        cy.get('select').should('have.length', 2); 
        cy.contains('button', 'Clean filters').should('be.visible');
        cy.get('input[type="range"]').should('have.length', 2);
    });
    it('should search for products based on input text', () => {
        const searchText = 'Laptop'; 

        cy.get('input[placeholder="Search..."]').type(searchText);
        cy.get('[data-testid="product"]').should('include.text', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    });    
it('should sort products based on selected option', () => {
    cy.get('select').first().select('asc');

    cy.get('[data-testid="product"]').first().should('include.text', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
       
    cy.get('select').last().select('desc');
    cy.wait(3000);
    cy.get('[data-testid="product"]').first().should('include.text', 'DANVOUY Womens T Shirt Casual Cotton Short') 
});
});
