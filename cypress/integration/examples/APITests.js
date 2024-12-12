///<reference types="cypress"/>
import { faker } from '@faker-js/faker';



describe('API Tests', () => {

    before('create data', () => {
       
    })

    it('Create a book & delete a book', () => {
        const words = faker.string.alpha(10);

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "Learn Appium Automation with Java",
            "isbn": words,
            "aisle": "33333333",
            "author": "John foe"


        }).then((response) => {
            expect(response.body).to.have.property('Msg', 'successfully added');
            const ID = response.body.ID;
            cy.log(ID);
            cy.request('POST', 'http://216.10.245.166/Library/DeleteBook.php', {
                
                "ID" : ID
            }).then((response) => {
                expect(response.body).to.have.property('msg', 'book is successfully deleted');

            })
            
 
               
                

        })

        
    
    

       

       

    

        
    })














})