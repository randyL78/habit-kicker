Feature: Home Page

  Scenario: Cypress runs without failing

    Given I visit the Habit Tracker homepage
    Then I should see "Habit Tracker"