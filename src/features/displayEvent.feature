Feature: Show and Hide Event Details

  Scenario: Show event details
    Given the user is viewing the EventList
    When the user clicks on the "Show Details" button for information about the event
    Then the event details should be displayed for that event

  Scenario: Hide event details
    Given the event details are displayed for an event
    When the user clicks on the "Hide Details" button to hide event
    Then the event details should be hidden for that event