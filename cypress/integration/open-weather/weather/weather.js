/// <reference types="cypress" />
import { CITY } from '../../../support/constants';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('A city name London', function (city) {
    cy.log(city);
    //TODO
    //this.context.request = city;
});

Given('The latitude {string} and the longitud {string}', function (lat, lon) {
    //TODO
    //this.context.request = city;
});

Given('The ZIP code {string}', function (zip) {
    //TODO
    //this.context.request = city;
});

When('I send GET request to weather service api endpoint', async function (path) {
    cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + '/weather?q=' + CITY.Name + '&appid=' + Cypress.env('apiKey')
    })
    .should(response => {
        cy.task('pushValue', { name: 'responseCode', value: response.status })
        cy.log(JSON.stringify(response.body));
    });
});

Then('I get response code {int}', async function (code) {
    cy.task('getValue', 'responseCode').then((responseCode) => {
        assert.equal(responseCode, code);
    });
});

//TODO
// Given('A city name {string}', function (city) {
//     cy.log(city);
//     //this.context.request = city;
// });