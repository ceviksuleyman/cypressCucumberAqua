const {defineConfig} = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber())
        },
        specPattern: "cypress/e2e/*.feature",
        video:false
    },
})


/*
npm init
2.0.0
npm install --save-dev typescript
npm install cypress --sev-dev
npx cypress open
npm i -D cypress cypress-cucumber-preprocessor
npm install --sev-dev cypress-cucumber-preprocessor

cypress.config.js file
const cucumber = require('cypress-cucumber-preprocessor').default

package.json file

"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "step_definitions": "cypress/e2e/exercises"
  },

  npm install --save-dev @faker-js/faker
 */