import 'cypress-file-upload';

describe("File Upload", () => {

    it("Single file upload", () => {
        
        cy.visit("https://the-internet.herokuapp.com/upload")   
        cy.get('#file-upload').attachFile('Hierarchy in CYPRESS.txt')
        cy.get('#file-submit').click()
        cy.wait(1500)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')
    })

    it("File upload - Rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath: 'Hierarchy in CYPRESS.txt', fileName: 'Test123.txt'})
        cy.get('#file-submit').click()
        cy.wait(1500)
        cy.get('div[class="example"] h3').should('have.text', 'File Uploaded!')

    })

    it("File upload - Drag and Drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('Hierarchy in CYPRESS.txt', { subjectType: 'drag-n-drop' })
        cy.wait(5000)
        cy.get('div[class="dz-preview dz-file-preview dz-processing dz-success dz-complete"]').contains('Hierarchy in CYPRESS.txt').should('be.visible')
        cy.log('File Uploaded Successfully')

    })

    it("Multiple files Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")   
        cy.get('#filesToUpload').attachFile(['Hierarchy in CYPRESS.txt', 'Screenshot (1).png', 'Screenshot (2).png'])
        cy.wait(1500)


    })

    it.only("File upload - Shadow DOM", () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('Hierarchy in CYPRESS.txt')
        cy.wait(5000)
        cy.get('.smart-item-name', {includeShadowDom: true}).contains('Hierarchy in CYPRESS.txt').should('be.visible')
        cy.log('File Uploaded Successfully')
    })

})