//Rainers Strads IT2

describe("Appointment History", () => {

    it("form", () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");

        //Login page
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#txt-username').should('have.value', 'John Doe');
        cy.get('#txt-password').should('have.value', 'ThisIsNotAPassword');
        cy.get('#btn-login').click();

        //Menu
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper').should('have.class', 'active');
        cy.get(':nth-child(4) > a').click();
        cy.get('.col-sm-12 > p').should('be.visible').and('have.text', 'No appointment.');
    });
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });
  });