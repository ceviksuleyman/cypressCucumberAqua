import {Given, When, Then, And,} from "cypress-cucumber-preprocessor/steps";

before(function () {

    cy.fixture("loginData").then(function (data) {
        this.data = data;
    });
});
Given("navigate to url", () => {

    cy.intercept({resourceType: /xhr|fetch/}, {log: false})
    cy.visit("https://www.automationexercise.com/")
})

Then(/^click signup\/login button$/, function () {

    cy.contains("Signup / Login").click()
});

When("enter email and password", function () {

    cy.get("input[data-qa='login-email']").type(this.data.email)

    cy.get("input[data-qa='login-password']").type(this.data.password)

});

When(/^click login button$/, function () {
    cy.get("button[data-qa='login-button']").click()
});