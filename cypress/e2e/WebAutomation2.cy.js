describe("Web Automation 2", () => {

    it.skip("Alert", () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //cy.url().should('include', 'herokuapp.com')
        //cy.title().should('eq', 'JavaScript Alerts')


        cy.get('button[onclick="jsAlert()"]').click()

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert')


    })


    it("Confirm Alert - ON", () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it("Confirm Alert - CANCEL", () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm', () => false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })


    it("Prompt Alert", () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: Welcome')


    })

    it("Prompt Alert", () => {
        
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.on('window:prompt', () => false)
        cy.get('#result').should('have.text', 'You entered: Welcome')

    })



    it.only("Alert 2", () => {
        
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:
            { username: "admin", password: "admin" }
        });
        cy.get('div[class="example"] p').should('have.contain', 'Congratulations! You must have the proper credentials.')
        
    })

})