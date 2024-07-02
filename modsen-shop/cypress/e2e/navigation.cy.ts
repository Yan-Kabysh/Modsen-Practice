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
          cy.visit('http://localhost:3000/login'); // Переходим на страницу логина
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
        cy.get('[data-testid="product"]').first().trigger('mouseover'); // Наводим курсор мыши на элемент
        cy.contains('GO TO CART').click(); // Кликаем после того, как элемент станет видимым
        cy.url().should('include', '/cart');
        }
       
      });

      it('should navigate to the cart page', () => {

        const token = localStorage.getItem('token');
       
             cy.visit('http://localhost:3000/');
        cy.get('[data-testid="product"]').first().trigger('mouseover'); // Наводим курсор мыши на элемент
        cy.contains('ADD TO CART').click(); // Кликаем после того, как элемент станет видимым
        if (!token) {
            cy.visit('http://localhost:3000/login'); // Переходим на страницу логина
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
    //   it('should navigate to the product page', () => {
    //     cy.visit('http://localhost:3000/shop/1');
    //     cy.contains('GO TO CART').click();
    //     cy.url().should('include', 'http://localhost:3000/cart');
    //   });
    it('should navigate to the home page', () => {
        cy.visit('http://localhost:3000/awdawd');
        cy.contains('HOMEPAGE').first().click();
        cy.url().should('include', 'http://localhost:3000/home');
      });
   

    
   
      
      it('should navigate to the login page if token is not present', () => {
          // Очистите localStorage перед посещением страницы
          cy.window().then((win) => {
              win.localStorage.removeItem('token');
            });
            
            // Перезагрузите страницу
            cy.visit('http://localhost:3000/');
            
            
            cy.window().then((win) => {
                expect(win.localStorage.getItem('token')).to.be.null;
            });
            
            // Выполните действие для перехода на страницу логина
            cy.get('[data-testid="button-cart"]').click();
            cy.url().should('include', '/login');
        });
        it('should navigate to the cart page after logging in', () => {
            // Перейдите на страницу входа
            cy.visit('http://localhost:3000/login');
        
            // Введите электронную почту и пароль
            cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
  cy.get('[data-testid="password"]').should('be.visible').type('123456');

            cy.wait(1000);
        
            // Нажмите кнопку входа
            cy.contains('button', 'Login').should('be.visible').click();
        
        
            cy.wait(3000);
        
            // Нажмите кнопку перехода на страницу корзины
            cy.get('[data-testid="button-cart"]').click();
        
            // Проверьте, что URL изменился на страницу корзины
            cy.url().should('include', '/cart');
            cy.contains('button', 'Log Out').should('be.visible').click();
        
        
            cy.wait(3000);
        
            // Нажмите кнопку перехода на страницу корзины
         
        
            // Проверьте, что URL изменился на страницу корзины
            cy.url().should('include', '/login');
          });

          it('should navigate to the cart page after logging in', () => {
            // Перейдите на страницу входа
            cy.visit('http://localhost:3000/login');
        
            // Введите электронную почту и пароль
            cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
  cy.get('[data-testid="password"]').should('be.visible').type('123456');

            cy.wait(1000);
        
            // Нажмите кнопку входа
            cy.contains('button', 'Login').should('be.visible').click();
        
        
            cy.wait(3000);
        
            // Нажмите кнопку перехода на страницу корзины
            cy.get('[data-testid="product"]').first().trigger('mouseover');
            cy.contains('GO TO CART').click();
        
            // Проверьте, что URL изменился на страницу корзины
            cy.url().should('include', '/cart');
            cy.contains('button', 'Log Out').should('be.visible').click();
        
        
            cy.wait(3000);
        
            // Нажмите кнопку перехода на страницу корзины
         
        
            // Проверьте, что URL изменился на страницу корзины
            cy.url().should('include', '/login');
          });

  it('should navigate to the cart page after logging in', () => {
    // Перейдите на страницу входа
    cy.visit('http://localhost:3000/login');

    // Введите электронную почту и пароль
    cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
cy.get('[data-testid="password"]').should('be.visible').type('123456');

    cy.wait(1000);

    // Нажмите кнопку входа
    cy.contains('button', 'Login').should('be.visible').click();


    cy.wait(3000);

    // Нажмите кнопку перехода на страницу корзины
    cy.get('[data-testid="product"]').first().click();
    cy.contains('GO TO CART').click();

    // Проверьте, что URL изменился на страницу корзины
    cy.url().should('include', '/cart');
    cy.contains('button', 'Log Out').should('be.visible').click();


    cy.wait(3000);

    // Нажмите кнопку перехода на страницу корзины
 

    // Проверьте, что URL изменился на страницу корзины
    cy.url().should('include', '/login');
  });


  it('should navigate to the cart page after logging in', () => {
    // Перейдите на страницу входа
    cy.visit('http://localhost:3000/login');

    // Введите электронную почту и пароль
    cy.get('[data-testid="email"]').should('be.visible').type('test@mail.ru');
cy.get('[data-testid="password"]').should('be.visible').type('123456');

    cy.wait(1000);

    // Нажмите кнопку входа
    cy.contains('button', 'Login').should('be.visible').click();


    cy.wait(3000);

    // Нажмите кнопку перехода на страницу корзины
     cy.get('[data-testid="button-cart"]').click();
     cy.url().should('include', '/cart');
     cy.get('[data-testid="cart-product"]').first().click();
     cy.url().should('include', '/shop/1');

  });
  });
  