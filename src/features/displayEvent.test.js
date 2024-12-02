import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/displayEvent.feature');

defineFeature(feature, test => {

    test('Show event details', ({ given, when, then }) => {
        given('the user is viewing the EventList', () => {

        });

        when('the user clicks on the "Show Details" button for information about the event', () => {

        });

        then('the event details should be displayed for that event', () => {

        });
    });

    test('Hide event details', ({ given, when, then }) => {
        given('the event details are displayed for an event', () => {

        });

        when('the user clicks on the "Hide Details" button to hide event', () => {

        });

        then('the event details should be hidden for that event', () => {

        });
    });
});
