import {loginFormMessages} from "../../../src/features/login/form/login-form-schema";

describe('Xerini Code Excerise - Test Suite', function () {


    describe('login page', () => {

        beforeEach(() => {
            cy.visit('http://localhost:3000');
        })

        it('should correctly load and render the login form if the current user is not signed in', () => {
            cy.url().should('include', 'signin');
            cy.get('#username');
            cy.get('#password');
            cy.get('#signIn');
            expect(localStorage.getItem('jwt')).to.be.null;
        })

        it('should display error messages when user tries to submit and empty form', () => {
            //arrange
            cy.url().should('include', 'signin');
            cy.get('#signIn').click();
            cy.get('#username-error').should('contain', loginFormMessages.userNameIsBlank)
            cy.get('#password-error').should('contain', loginFormMessages.passwordIsBlank.toString())
        })

        it('should display error message if the user enters a password less than 3 charaters long', () => {
            //arrange
            cy.get('#username').type('mk')
            cy.get('#password').type('pas');
            cy.url().should('include', 'signin');
            cy.get('#signIn').click();
            cy.get('#password-error').should('contain', loginFormMessages.passwordIsLessThan5)
        })

        it('should display error message if password is incorrect', () => {
            cy.get('#username').type('mk')
            cy.get('#password').type('password12');
            cy.get('#signIn').click();
            cy.get('#signin_errors');
        })

        it('should display error message if the username doesnt exists', () => {
            cy.get('#username').type('mk1')
            cy.get('#password').type('password12');
            cy.get('#signIn').click();
            cy.get('#signin_errors');
        })

        it('should redirect the user to the dashboard if username and password are correct', () => {
            cy.get('#username').type('mk').should('have.value', 'mk');
            cy.get('#password').type('password1').should('have.value', 'password1');
            cy.get('#signIn').click();
            cy.url().should('contain', 'dashboard');
            localStorage.getItem('jwt');
        })
    })


    describe('User Profile page',()=>{
        beforeEach(()=>{
            cy.visit('http://localhost:3000/');
            cy.get('#username').type('mk')
            cy.get('#password').type('password1');
            cy.get('#signIn').click();
            cy.get('#nav_item_profile').click()
        })

        it('should display current user info',()=>{
            cy.get('#profile-info');
        })

        it('should open user profile in edit mode when Edit Profile is clicked',()=>{
            cy.get('#edit_profile').click()
            cy.url().should('include','edit');
        })

        it('should display validation error message if any field is empty',()=>{
            cy.get('#edit_profile').click()
            cy.url().should('include','edit');


            cy.get('#first_name').clear();
            cy.get('#other_names').clear();
            cy.get('#email').clear();
            cy.get('#submit_form').click();

            cy.screenshot();
        })

        it('should submits and save the user info data if all required fields have value',()=>{
            cy.get('#edit_profile').click()
            cy.url().should('include','edit');


            cy.get('#first_name').clear().type('Test First Name');
            cy.get('#other_names').clear().type('Test Last Name');
            cy.get('#email').clear().type('Test@test.com');
            cy.get('#submit_form').click();
            cy.screenshot();
            cy.url().should('include','confirm')
            cy.screenshot();
            cy.get('#go_to_dashboard').click();
            cy.url().should('include','profile')
            cy.screenshot();
        })
    })

});