import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

const URL = "http://nginx:80/"

Given('I visit the Habit Kicker homepage', () => {
  cy.visit(URL)
})

Then('I should see {string}', (title) => {
  cy.get('body').contains(title)
})