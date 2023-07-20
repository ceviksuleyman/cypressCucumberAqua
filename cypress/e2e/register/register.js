import {Given, When, Then, And,} from "cypress-cucumber-preprocessor/steps";
import {faker} from "@faker-js/faker";

let firstname = faker.person.firstName("male");
let lastname = faker.person.lastName("male");
let password = faker.internet.password({length: 8});
let email = faker.internet.email();

Given("navigate to url automationpractice", () => {

    cy.intercept({resourceType: /xhr|fetch/}, {log: false})
    cy.visit("http://automationpractice.pl/index.php")
})
Then(/^enter valid email address and click submit button$/, function () {

    cy.get(".login").click();

    cy.get("#email_create").type(email);

    cy.get("#SubmitCreate > span").click();
});

Then(/^Fill details gender, firstname, lastname, password, date of birth$/, function () {

    cy.get(".radio-inline").eq(0).click();

    cy.get("#customer_firstname").type(firstname);

    cy.get("#customer_lastname").type(lastname);

    cy.get('#passwd').type(password)

    cy.get('#days').select('11')
    cy.get('#months').select('8')
    cy.get('#years').select('1999')

    cy.get('#newsletter').click()
});

Then(/^Click Register button$/, function () {

    cy.get('#submitAccount > span').click()
});

Then(/^verify register$/, function () {

    cy.get('.alert').should('contain.text', 'Your account has been created.')
    cy.get('.account > span').should('include.text', firstname)
    cy.get('.account > span').should('include.text', lastname)
    cy.get('.alert').screenshot()
});