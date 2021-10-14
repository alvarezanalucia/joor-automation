/// <reference types="cypress" />
import { CITY } from '../../../support/constants';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('The latitude {string} and the longitud {string}', function (lat, lon) {
    //TODO
    //this.context.request = city;
});

When('I send GET request to weather service api endpoint', async function (path) {
    cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + '/weather?q=' + CITY.Name + '&appid=' + Cypress.env('apiKey')
    })
    .should(response => {
        cy.log(JSON.stringify(response.body));
    });
});

Then('I get response code {int}', async function (code) {
    assert.equal(200, code);
});