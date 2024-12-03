import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/listCount.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('user on main page', () => {

        });

        when(/^number in event count textbox default set to (\d+)$/, (arg0) => {

        });

       then(/^the number of events displayed is exactly (\d+) events$/, (arg0) => {

        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        given('clicks on texbox with event number count', () => {

        });

        when('user changes the number of events', () => {

        });

        then('page displays number of events user prefers displayed', () => {

        });
    });
});
