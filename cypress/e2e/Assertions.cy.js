describe('Assertions', () => {
    
    it("Implicit Assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // cy.url().should('contain', 'orangehrm')


       //cy.url().should('include', 'orangehrmlive.com')
        //.should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // .should('contain', 'orangehrm')

       cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')

       cy.title().should('include', 'OrangeHRM')
       .and('eq', 'OrangeHRM')
       .and('contain', 'Orange')

       cy.get('.orangehrm-login-branding > img').should('be.visible')
       .and('exist')

       cy.xpath("//a").should('have.length', '5') 

       cy.get('[name="username"]').type("Admin")
       cy.get('[name="username"]').should('have.value', 'Admin')
       cy.get('[name="password"]').type("admin123")
       cy.get('[name="password"]').should('have.value', 'admin123')
    })


    it("Explicit Assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get("button[type='submit']").click()
        

        let expName = "Damon salvatore";

        cy.get(".oxd-userdropdown-name").then ( (e)=> {
            let actName = e.text()
            //BDD Style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD Style
            let assert = require('assert')
            assert.equal(actName, expName)
            assert.notEqual(actName, expName)
        })
    })

 

    
    
})