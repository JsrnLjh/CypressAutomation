describe("Travel Agile Automation Test Suite", () => {
    
    it("Travel Agile Test Case", () => {

        
        cy.visit("https://travel.agileway.net/login")
        cy.url().should('include', 'agileway.net')
        cy.title().should('eq', 'Agile Travel')

        cy.get('div#container').should('be.visible')
        cy.get("[href='/users/new']").should('be.visible').click()
        cy.get("[href='/login']").should('be.visible').click()

        cy.get('#login-box').should('be.visible')
        cy.get('input#username').click()
        .type('agileway')
        .should('have.value', 'agileway')
        cy.get('input#password').click()
        .type('test$W1se')
        .should('have.value', 'test$W1se')

        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('input[type="submit"]').click()

    })


    it("Travel Agile Test Case 2", () => {

        cy.visit('https://travel.agileway.net/flights/start')
        cy.url().should('include', 'agileway.net')

        cy.get('div#container').should('be.visible')
        cy.get('input[value="return"]').check().should('be.checked')
        cy.get('input[value="oneway"]').check().should('be.checked')
        cy.get('input[value="return"]').check().should('be.checked')

        cy.get('form[action="/flights/select_date"]').should('be.visible')
        cy.get('select[name="fromPort"]').select('New York')
        .should('have.value', 'New York')
        cy.get('select[name="toPort"]').select('Sydney')
        .should('have.value', 'Sydney')

        cy.get('#departDay').select('20')
        .should('have.value', '20')
        cy.get('#departMonth').select('June 2026')
        .should('have.value', '062026')

        cy.get('#flights.table.striped').should('be.visible')
        cy.get('input[type="checkbox"]').last().check().should('be.checked')
        cy.get('input[type="submit"]').click()

    })


    it("Travel Agile Test Case 3", () => {

        cy.visit('https://travel.agileway.net/flights/select_date?tripType=oneway&fromPort=&toPort=&departDay=20&departMonth=062026&returnDay=01&returnMonth=012025')
        cy.url().should('include', 'agileway.net')

        cy.get('div#container').should('be.visible')
        cy.get('form[action="/flights/passenger"]').should('be.visible')

        cy.get('input[name="passengerFirstName"]').click()
        .type('John')
        .should('have.value', 'John')
        cy.get('input[name="passengerLastName"]').click()
        .type('Doe')
        .should('have.value', 'Doe')

        cy.get('input[value="Next"]').click()

    })

    it("Travel Agile Test Case 4", () => {

        //cy.visit('https://travel.agileway.net/flights/passenger')
        cy.visit('https://travel.agileway.net/flights/passenger', { failOnStatusCode: false });

        cy.get('div#container').should('be.visible')
        cy.get('form#payment-form').should('be.visible')

        cy.get('input[name="holder_name"').should('have.value', 'John Doe')

        cy.get('input[value="visa"]').check().should('be.checked')
        cy.get('input[name="card_number"]').type('12345678909876')
        .should('have.value', '12345678909876')


    })

})