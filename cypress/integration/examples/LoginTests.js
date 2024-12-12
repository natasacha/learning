///<reference types="cypress"/>

import HomePage from "../../support/pageObjects/HomePage.js";
import LoginPage from "../../support/pageObjects/LoginPage.js";


describe('Login Test Suite', () => {
   const errorMessage = 'There is 1 error';
   const url = 'controller=my-account';
   const homePage = new HomePage();
   const loginPage = new LoginPage();

    beforeEach(()=> {
        cy.visit(Cypress.env('url'));
        cy.fixture('example.json').then((data)=> {
            globalThis.data=data;
        });
        cy.fixture('dataDriven.json').then((test)=> {
            globalThis.test=test;
        })
    })
    it('Try to login with invalid credentials', () => {
        homePage.goToSignInForm();
        loginPage.getEmailAddress().type(globalThis.data.email[0]);
        loginPage.getPassword().type(globalThis.data.password[0]);
        loginPage.getSignInButton().click();
        loginPage.getErrorPopup().should('contain', errorMessage );
        
        

    })

    it('Login with valid credentials', () => {
        homePage.goToSignInForm();
        loginPage.getEmailAddress().type(globalThis.data.email[1]);
        loginPage.getPassword().type(globalThis.data.password[1]);
        loginPage.getSignInButton().click();
        cy.url().should('contain', url);
        

    })

   

   





})