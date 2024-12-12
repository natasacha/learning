const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            url: 'http://216.10.245.166/Library'
        }



    },
});