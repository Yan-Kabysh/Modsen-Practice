export {}

describe('Navigation', () => {
    it('should navigate to the home page', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('Modsen SHOPPE').click();
      cy.url().should('include', '/home');
    });
  
    it('should navigate to the shop page', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('Shop').click();
      cy.url().should('include', '/shop');
    });
    it('should navigate to the shop page', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('View All').click();
        cy.url().should('include', '/shop');
      });
  
      it('should navigate to the cart page or login page based on token presence', () => {
        cy.visit('http://localhost:3000/');
      
        const token = localStorage.getItem('token');
      
        if (token) {
          cy.get('[data-testid="button-cart"]').click();
          cy.url().should('include', '/cart');
        } else {
          cy.visit('http://localhost:3000/login');
          cy.url().should('include', '/login');
        }
      });
      
      
    it('should navigate to the product page', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('View Product').click();
        cy.url().should('include', '/shop/');
      });
      it('should navigate to the product page', () => {
        cy.visit('http://localhost:3000/');
        cy.get('[data-testid="product"]').first().click();
        cy.url().should('include', '/shop/');
      });
      
      
      
      
      it('should navigate to the cart page', () => {

        const token = localStorage.getItem('token');
        if (token) {
             cy.visit('http://localhost:3000/');
        cy.get('[data-testid="product"]').first().trigger('mouseover'); 
        cy.contains('GO TO CART').click(); 
        cy.url().should('include', '/cart');
        }
       
      });

      it('should navigate to the cart page', () => {

        const token = localStorage.getItem('token');
       
             cy.visit('http://localhost:3000/');
        cy.get('[data-testid="product"]').first().trigger('mouseover');
        cy.contains('ADD TO CART').click(); 
        if (!token) {
            cy.visit('http://localhost:3000/login'); 
            cy.url().should('include', '/login');
        }
       
      });
      
      
    it('should navigate to the contact us page', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('CONTACT').click();
      cy.url().should('include', '/contact');
    });
    it('should navigate to the product page', () => {
        cy.visit('http://localhost:3000/shop');
        cy.get('[data-testid="product"]').first().click();
        cy.url().should('include', '/');
      });

    it('should navigate to the home page', () => {
        cy.visit('http://localhost:3000/awdawd');
        cy.contains('HOMEPAGE').first().click();
        cy.url().should('include', 'http://localhost:3000/home');
      });
   

    
   
      
      it('should navigate to the login page if token is not present', () => {
          cy.window().then((win) => {
              win.localStorage.removeItem('token');
            });
            
            cy.visit('http://localhost:3000/');
            
            
            cy.window().then((win) => {
                expect(win.localStorage.getItem('token')).to.be.null;
            });
            
            cy.get('[data-testid="button-cart"]').click();
            cy.url().should('include', '/login');
        });
        it('should navigate to the cart page after logging in', () => {
            cy.visit('http://localhost:3000/login');
        
            cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
            cy.get('[data-testid="password"]').should('be.visible').type('123456');

            cy.wait(1000);
        
            cy.contains('button', 'Login').should('be.visible').click();
        
        
            cy.wait(3000);
        
            cy.get('[data-testid="button-cart"]').click();
        
            cy.url().should('include', '/cart');
            cy.contains('button', 'Log Out').should('be.visible').click();
        
        
            cy.wait(3000);
        
         
        
            cy.url().should('include', '/login');
          });

          it('should navigate to the cart page after logging in', () => {
            cy.visit('http://localhost:3000/login');
        
            cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
          cy.get('[data-testid="password"]').should('be.visible').type('123456');

            cy.wait(1000);
        
            cy.contains('button', 'Login').should('be.visible').click();
        
        
            cy.wait(3000);
        
            cy.get('[data-testid="product"]').first().trigger('mouseover');
            cy.contains('GO TO CART').click();
        
            cy.url().should('include', '/cart');
            cy.contains('button', 'Log Out').should('be.visible').click();
            cy.wait(3000);
            cy.url().should('include', '/login');
          });

  it('should navigate to the cart page after logging in', () => {
    cy.visit('http://localhost:3000/login');

    cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
cy.get('[data-testid="password"]').should('be.visible').type('123456');

    cy.wait(1000);

    cy.contains('button', 'Login').should('be.visible').click();
    cy.wait(3000);
    cy.get('[data-testid="product"]').first().click();
    cy.contains('GO TO CART').click();
    cy.url().should('include', '/cart');
    cy.contains('button', 'Log Out').should('be.visible').click();
    cy.wait(3000);
    cy.url().should('include', '/login');
  });


  it('should navigate to the cart page after logging in', () => {
    cy.visit('http://localhost:3000/login');

    cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
    cy.get('[data-testid="password"]').should('be.visible').type('123456');
    cy.wait(1000);

    cy.contains('button', 'Login').should('be.visible').click();


    cy.wait(3000);

     cy.get('[data-testid="button-cart"]').click();
     cy.url().should('include', '/cart');
     cy.get('[data-testid="cart-product"]').first().click();
     cy.url().should('include', '/shop/1');

  });
  });
  