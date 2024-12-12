class LoginPage{

    getEmailAddress(){
        return cy.get('#email');
    }

    getPassword(){
        return cy.get('#passwd')
    }

    getSignInButton(){
        return cy.get('#SubmitLogin');
    }

    getErrorPopup(){
        return cy.get('.alert.alert-danger p')
    }

  
    

    
}

export default LoginPage;