// in cypress/e2e/login.cy.js

describe('Login Form', () => {
  it('should allow a user to log in using XPath selectors', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Navigate to the login page

    // Find the username input field using its name attribute and type into it
    cy.xpath('//input[@name="username"]').type('Admin');

    // Find the password input field and type into it
    cy.xpath('//input[@name="password"]').type('admin123');

    // Find the login button by its text and click it
    cy.xpath('//button[@type="submit"]').click();

    // Assert that the URL changed after a successful login
    cy.url().should('include', '/dashboard');
  });
});