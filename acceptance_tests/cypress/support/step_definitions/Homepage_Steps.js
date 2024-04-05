import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

const URL = "http://localhost:8080/"

Given('A visitor visit the Habit Kicker homepage', () => {
  cy.visit(URL)
})

Then('The visitor should see {string}', (title) => {
  cy.get('body').contains(title)
})
