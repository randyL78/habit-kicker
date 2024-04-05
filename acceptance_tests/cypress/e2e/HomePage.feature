Feature: Home Page

  Scenario: Cypress runs without failing
    Given A visitor visit the Habit Kicker homepage
    Then The visitor should see "Habit Kicker"
