const {defineConfig} = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber())
        },
        specPattern: "cypress/e2e/*.feature",
        video:false,
        baseUrl:"https://www.automationexercise.com/"
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

  // Rastgele bir sayı seçmek için 0 ile 3 arasındaki değerleri kullanırız.
// Math.random() fonksiyonu 0 (dahil) ile 1 (hariç) arasında rastgele bir ondalıklı sayı döndürür.
// Ardından bu değeri 4 ile çarparız ki 0 (dahil) ile 4 (hariç) arasında bir ondalıklı sayı elde edelim.
// Math.floor() fonksiyonu bu ondalıklı sayıyı aşağıya yuvarlayarak tam bir tamsayı elde etmemizi sağlar.
// Böylece 0, 1, 2 veya 3 değerlerinden birini elde ederiz.

function getRandomNumber() {
  return Math.floor(Math.random() * 4);
}

// Örnek kullanım:
const randomNum = getRandomNumber();
console.log(randomNum);

 */