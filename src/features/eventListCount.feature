Feature: Display Events in EventList Component

  Scenario: Display the correct number of events
    Given the EventList component is mounted
    When the page is loaded
    Then the EventList should display exactly 35 events