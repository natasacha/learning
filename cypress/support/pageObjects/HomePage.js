class HomePage {

    goToSignInForm(){
        cy.get('.login').click();
    }

    searchProduct(productName){
        cy.get('.search_query.form-control.ac_input').type(productName);
        cy.get('.ac_results li').each(($element, index) => {
            const elementText = $element.text();
            expect(elementText).to.contain(productName);
        })


    }

    goToWomanSection(){
        cy.contains('a', 'Women').click();
    }

  
}

export default HomePage;