const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    specPattern: 'tests/**/*.ts',
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});