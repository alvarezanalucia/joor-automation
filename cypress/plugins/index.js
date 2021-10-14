/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

 const cucumber = require('cypress-cucumber-preprocessor').default;

 const storedValues = {}


// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber());

  // stores and retrieves values
  on('task', {
    pushValue({ name, value }) {
      console.log(name, value)
      storedValues[name] = value
      console.log(storedValues)
      return true
    },
  })
  on('task', {
    getValue(name) {
      return storedValues[name]
    },
  });
}