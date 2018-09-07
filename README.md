# ants-calendar

## Installation
Run `yarn install` on the command line.

## Running
Run `yarn start` on the command line to start the node server.

## Testing
Run `yarn test` on the command line to run the test suite.

## Notes

I began using `create-react-app` to scaffold the app, then installed the dependencies I needed, like redux, jest, enzyme and styled-components.

I added basic tests for the UI and added the simple calendar functionality.

Next, I added the redux actions/reducer/selectors and their tests, where most of the app's business logic lies.

I didn't manage to complete all the functionality as I was a bit pushed for time, but I did try to write the code cleanly, starting with tests for the main App component and for the actions.

I used the styled-components library as it promotes reusing components, rather than styles, which is more like the way to style in React Native and I like this philosophy.

Functionality I did manage to add was showing current month, displaying the reminders, sorting by time and limited adding reminder functionality.
The next steps would have been relatively simple i.e. checks on the reminder length, some better styling and allowing some `connect`ed navigation buttons to allow switching to prev/next months, as well as allowing to add the colour of reminders.

There is room for increased performance by removing anonymous functions and variables declared in render methods.

I have added some `NOTE`s in the code just for some further explanations on certain decisions, and also how I might improve in future.
