import {Given, When, Then, And,} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage.cy";
import LoginPage from "../pages/LoginPage.cy";

const homePage = new HomePage();
const loginPage = new LoginPage();

Given(/^pom navigate to url$/, function () {

    cy.intercept({resourceType: /xhr|fetch/}, {log: false})
    cy.visit("/")
});
Then(/^pom click signup\/login button$/, function () {

    homePage.getSignInLink().click()
});
When(/^pom enter email and password$/, function () {

    loginPage.getEmailTextBox().type("automation01@gmail.com")
    loginPage.getPasswordTextBox().type("123456!a")
});
When(/^pom click login button$/, function () {

    loginPage.getSignInButton().click();
});
When(/^pom verify login$/, function () {

    //loginPage.getLoginAssertion("Automation");
    loginPage.assertionFunc(":nth-child(10) > a", "Automation");

    loginPage
        .getHeader()
        .should("contain.text", "Home")
        .and("contain.text", "Products")
        .and("contain.text", "Cart")
        .and("contain.text", "Logout")
        .and("contain.text", "API Testing");

    loginPage.getHeaderScreenShoot();
});