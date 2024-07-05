describe('Shopping Cart Functionality', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
  
        cy.get('[data-testid="email"]').type('test@mail.ru');
        cy.get('[data-testid="password"]').type('123456');
        cy.wait(5000);
  
        cy.contains('button', 'Login').should('be.visible').click();
        cy.wait(5000);
      });
    it('should add a product to the cart after logging in', () => {
       
    
        cy.get('[data-testid="product"]').first().click();
        cy.wait(5000);

  
        cy.contains('button', 'Add to Cart').click();
  
        cy.wait(5000);
  
        cy.contains('button', 'Go to Cart').click();
        cy.wait(5000);
        cy.get('[data-testid="cart-product"]').should('exist');
        cy.contains('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').should('exist');
    });

    it('should add a product quantity', () => {
       
    
        cy.get('[data-testid="button-cart"]').click();
        cy.wait(5000);

  
        cy.contains('button', '+').first().click();
  
        cy.wait(5000);
  
        cy.contains('Modsen SHOPPE').click();
  
        cy.wait(5000);
  
        cy.get('[data-testid="button-cart"]').click();
        cy.wait(5000);
        cy.get('[data-testid="quantity"]').should('have.text', '2');
    });

    it('should minus a product quantity', () => {
       
    
        cy.get('[data-testid="button-cart"]').click();
        cy.wait(5000);

  
        cy.contains('button', '-').first().click();
  
        cy.wait(5000);
  
        cy.contains('Modsen SHOPPE').click();
  
        cy.wait(5000);
  
        cy.get('[data-testid="button-cart"]').click();
        cy.wait(5000);
        cy.get('[data-testid="quantity"]').should('have.text', '1');
    });


    it('should remove a product', () => {
       

        cy.get('[data-testid="button-cart"]').click();
        cy.wait(5000);
    
        cy.contains('button', 'Remove').first().click();
        cy.wait(5000);

  
        cy.contains('Modsen SHOPPE').click();
  
        cy.wait(5000);
  
        cy.get('[data-testid="button-cart"]').click();
        cy.wait(5000);
        cy.contains('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops').should('not.exist');
    });
});
