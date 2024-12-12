///<reference types="cypress"/>



describe('API Tests', () => {

    it('Create a book & delete a book', () => {

        const randomIsb = Math.floor(Math.random() * 100) + 1;


        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "Learn Appium Automation with Java",
            "isbn": randomIsb,
            "aisle": "2222222",
            "author": "John foe"


        }).then((response) => {
            expect(response.body).to.have.property('Msg', 'successfully added');
            cy.request('POST', 'http://216.10.245.166/Library/DeleteBook.php', {
                "ID" : randomIsb + "2222222"
            }).then((response) => {
                expect(response.body).to.have.property('msg', 'book is successfully deleted');
            })

        })

      




    })














})