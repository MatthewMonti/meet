import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/listCount.feature');

defineFeature(feature, test => {
    test('Display the correct number of events', ({ given, when, then }) => {
        given('the EventList component is mounted', () => {

        });

        when('the page is loaded', () => {

        });

        then('the EventList should display exactly "35" events', () => {

        });
    });
});
