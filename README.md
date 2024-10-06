# Meet App
For my Meet App I will be using serverless functions. This will allow me to ensure my app is consistantly response in real-time thus meeting the critical needs of the users and stakeholders. I used the serverless platforms autoscale because its based on demand, and the app can handle heavy amounts of load on its server. Since the app events are dependent on where these events are being held, the serverless functions can easily integrate the geolocation service of the location of the user's interest as well as handling authentication with Google Calendar API. 

## Feature 1: Show/Hide Event Details
As a user, 
I should be able to click on a button
So that I can see the the details of the event.

Given: The user viewed the event details page. <br />
When: The user clicks on a button for a specific function. <br />
Then: The button will show event details or hide the information about the events.

## Feature 2: Category of Event Details
As a user, 
I should be able to select from a list of event categories to assign to event.

Given: The user is selecting a category to assign to an event for easier grouping and referencing. <br />
When: The user selects the button from a list of categories and then selects a classification to be assign to event <br />
Then: The information of the event refreshes, displaying the event along with category the event is assign to.

## Feature 3: Use the App When Offline
As a user,
If I lose internet connection, I should be able to still see previously viewed events and cached data.

Given: The user has accessed the app while on internet connection before <br />
When: The user loses the WIFI or Ethernet connection. <br />
Then: The event application displays a message that the user is offline and only previously viewed events and cached data are still accessible.

## Feature 5: Add an App Shortcut to the Home Screen
As a user,
I should be able to have an option to add the app as a shortcut
So that the app icon appears on the home screen.

Given: The user has installed the app on their phone. <br />
When: The user presses add shortcut button to home screen <br />
Then: The app will be shown on the home screen.

## Feature 6: Display Charts Visualizing Event Details on a Calendar
As a user,
I should be able to click on a button
That shows the event details on a calendar where data and time are shown.

Given: The user is viewing the event list page. <br />
When: The user taps on a "View Calendar" button. <br />
Then: A chart will render showing times and dates of various events 
