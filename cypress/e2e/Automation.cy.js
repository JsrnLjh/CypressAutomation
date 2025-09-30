

describe ("Automation Test Suite", () => {

    it("Automation Test Case", () => {
        
        cy.visit("https://www.shino.de/parkcalc/")
        cy.url().should('include', 'shino.de')
        cy.title().should('eq', 'Parking Cost Calculator')

        cy.get('#ParkingLot').select('Short-Term Parking')
        cy.get('#ParkingLot').should('have.value', 'Short')

        cy.get('#StartingDate').clear().type('06/20/2024')
        cy.get('#StartingTime').clear().type('3:00')
        cy.get('[name="StartingTimeAMPM"][value="AM"]').click()
        cy.get('#LeavingDate').clear().type('06/20/2024')
        cy.get('#LeavingTime').clear().type('7:00')
        cy.get('[name="LeavingTimeAMPM"][value="PM"]').click()
        cy.get('[value="Calculate"]').click()


    })

    it.skip("Automation Test Case 2", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('include', 'testautomationpractice')
        cy.title().should('eq', 'Automation Testing Practice')

        cy.get('div.post.hentry.uncustomized-post-template')
        cy.title('a[href="https://testautomationpractice.blogspot.com/2018/09/automation-form.html"]').should('eq', 'Automation Testing Practice')
        

        cy.get('div.form-group').should('be.visible')
        cy.get('input#name.form-control').click()
        .type('John Wick')
        .should('have.value', 'John Wick')

        cy.get('input#email.form-control').click()
        .type('john.wick@example.com')
        .should('have.value', 'john.wick@example.com')

        cy.get('input#phone.form-control').click()
        .type('1234567890')
        .should('have.value', '1234567890')

        cy.get('textarea#textarea.form-control').click()
        .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
        .should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')

        cy.get('div.form-group').should('be.visible')
        cy.get('input#male.form-check-input').click()

        cy.get('input#monday.form-check-input').click()
        cy.get('input#tuesday.form-check-input').click()
        cy.get('input#wednesday.form-check-input').click()
        cy.get('input#thursday.form-check-input').click()
        cy.get('input#friday.form-check-input').click()

        cy.get('#country')
        .select('Japan')
        .should('have.value', 'japan')

        cy.get('div.form-group').should('be.visible')
        cy.get('#colors')
        .select('Blue')
        //.should('have.value', 'blue')

        cy.get('#animals')
        .select('Fox')
        //.should('deep.equal', '["fox"]')


        cy.get('input#datepicker.hasDatepicker').click()
        .type('06/25/2025')
        .should('have.value', '06/25/2025')

        //cy.get('input#txtDate.hasDatepicker').click()
        //cy.get('#txtDate').click({ force: true })
        //.type('06/30/2025')
        //.should('have.value', '06/30/2025')
        

        //cy.get('input#start-date').click()
        //.clear().type('2025/10/05')
        //.should('have.value', '2025/10/05')

        //cy.get('input#end-date').click()
        ///.clear().type('2025/12/10')
        //.should('have.value', '2025/12/10')

        //cy.get('button.submit-btn').click()

    })











})