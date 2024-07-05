describe('Contact Us Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/contact');
    });

    it('should display the contact form', () => {
        cy.get('form').should('be.visible');
    });

    it('should show error messages for empty required fields', () => {
        cy.contains('button', 'SEND').click();

        cy.get('[data-testid="firstName-error"]').should('contain', 'Required field.');
        cy.get('[data-testid="lastName-error"]').should('contain', 'Required field.');
        cy.get('[data-testid="email-error"]').should('contain', 'Required field.');
        cy.get('[data-testid="subject-error"]').should('contain', 'Required field.');
        cy.get('[data-testid="message-error"]').should('contain', 'Required field.');
    });

    it('should show error message for invalid email', () => {
        cy.get('input[placeholder="Email"]').type('invalid-email');
        cy.contains('button', 'SEND').click();

        cy.get('[data-testid="email-error"]').should('contain', 'Enter the correct email');
    });

    it('should submit the form successfully with valid data', () => {

        cy.get('input[placeholder="First name"]').type('John');
        cy.get('input[placeholder="Last name"]').type('Doe');
        cy.get('input[placeholder="Email"]').type('bobi.starik@mail.ru');
        cy.get('input[placeholder="Subject"]').type('Test Subject');
        cy.get('textarea[placeholder="Message"]').type('Test Message');

        cy.contains('button', 'SEND').click();
        

        cy.get('input[placeholder="First name"]').should('have.value', '');
        cy.get('input[placeholder="Last name"]').should('have.value', '');
        cy.get('input[placeholder="Email"]').should('have.value', '');
        cy.get('input[placeholder="Subject"]').should('have.value', '');
        cy.get('textarea[placeholder="Message"]').should('have.value', '');
    });
});
