describe ("Web Automation", () => {

    it("Web Automation Test Case", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/login")
        cy.url().should('include', 'herokuapp.com')
        cy.title('h1').should('eq', 'Contact List App')
 

        cy.get('form').should('be.visible')
        cy.get('input#email').click()
        .type('doejohn@gmail.com')
        .should('have.value', 'doejohn@gmail.com')

        cy.get('input#password').click()
        .type('123456')
        .should('have.value', '123456')

        cy.get('button#submit').click()

        if (cy.get('span#error').should('be.visible')) {
            cy.log('Login Failed - Invalid Credentials')
            cy.get('button#signup').should('be.visible').click()
        }
        else {
            cy.log('Login Successful - Valid Credentials')
        }

    })

    it("Web Automation Test Case 2", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/addUser")

        cy.get('form#add-user').should('be.visible')
        cy.get('input#firstName').click()
        .type('John')
        .should('have.value', 'John')

        cy.get('input#lastName').click()
        .type('Doe')
        .should('have.value', 'Doe')

        cy.get('input#email').click()
        .type('john.doe@yahoomail.com')
        .should('have.value', 'john.doe@yahoomail.com')

        cy.get('input#password').click()
        .type('password123')
        .should('have.value', 'password123')

        cy.get('button#submit').click()

    })


    it("Web Automation Test Case 3", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/addContact")

        cy.get('form#add-contact').should('be.visible')
        cy.get('input#firstName').click()
        .type('Remy')
        .should('have.value', 'Remy')

        cy.get('input#lastName').click()
        .type('Rat')
        .should('have.value', 'Rat')

        cy.get('input#birthdate').click()
        .type('1990-01-01')
        .should('have.value', '1990-01-01')

        cy.get('input#email').click()
        .type('remy.rat@yahoomail.com')
        .should('have.value', 'remy.rat@yahoomail.com')

        cy.get('input#phone').click()
        .type('1234567891')
        .should('have.value', '1234567891')

        cy.get('input#street1').click()
        .type('Rizal Street')
        .should('have.value', 'Rizal Street')

        cy.get('input#street2').click()
        .type('Apt 4B')
        .should('have.value', 'Apt 4B')

        cy.get('input#city').click()
        .type('Quezon')
        .should('have.value', 'Quezon')

        cy.get('input#stateProvince').click()
        .type('Metro Manila')
        .should('have.value', 'Metro Manila')

        cy.get('input#postalCode').click()
        .type('1100')
        .should('have.value', '1100')

        cy.get('input#country').click()
        .type('Philippines')
        .should('have.value', 'Philippines')

        cy.get('button#submit').click()

    })


})



    