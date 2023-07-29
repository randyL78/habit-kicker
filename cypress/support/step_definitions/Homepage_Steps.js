import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

const URL = "http://localhost:8080/"

Given('I visit the Habit Tracker homepage', () => {
  cy.visit(URL)
})

Then('I should see Hello World', () => {
  cy.get('body').contains('Hello World')
})