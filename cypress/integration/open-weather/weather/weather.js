/// <reference types="cypress" />
import { CITY } from '../../../support/constants';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


Given('A city name London', function (city) {
    cy.log(city);
    //TODO
    //this.context.request = city;
});


Given('A city name Londonnnn', function (city) {
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
        url: Cypress.env('baseUrl') + '/weather?q=' + CITY.Name + '&appid=' + Cypress.env('apiKey'),
        failOnStatusCode: false
    })
    .should(response => {
        cy.task('pushValue', { name: 'responseCode', value: response.status })
        cy.task('pushValue', { name: 'temp_min', value: response.body.main.temp_min })
        cy.log(JSON.stringify(response.body));
    });
});

Then('I get response code {int}', async function (code) {
    cy.task('getValue', 'responseCode').then((responseCode) => {
        assert.equal(responseCode, code);
    });
});

Then('I get response code is {int} and temp_min between {int} and {int}', async function (code, min, max) {
    cy.task('getValue', 'responseCode').then((responseCode) => {
        assert.equal(responseCode, code);
    });
    cy.task('getValue', '   temp_min').then((temp_min) => {
        assert.isAtLeast(temp_min, min);
        assert.isAtMost(temp_min, max);
    });
});

When('I send request to weather service api endpoint', async function (path) {
    cy.request({
        method: 'GET',
        url: Cypress.env('baseUrl') + '/weather?q=' + CITY.Name + '&appid=' + Cypress.env('apiKey') + 'ajs',
        failOnStatusCode: false
    })
    .should(response => {
        cy.task('pushValue', { name: 'responseCode', value: response.status })
    });
});

Then('I get response code 401', async function () {
    cy.task('getValue', 'responseCode').then((responseCode) => {
        assert.equal(responseCode, 401);
    });
});
//TODO
// Given('A city name {string}', function (city) {
//     cy.log(city);
//     //this.context.request = city;
// });