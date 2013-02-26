# Exercise 2

## 2.0

Load jQuery and app.js scripts at the bottom of the page

## 2.1

Create an event listener that listens for a `click` event on the example task `<li>` elements. Add a `class` of "editing" to the `<li>` that was clicked and also remove the "editing" `class` from all other tasks in the list.

Remove the "editing" `class` from all items in the list when the user clicks on the `#new-todo` input.

**Bonus:** Try to delegate all events to the `#todoapp` element.

## 2.2

In app.js, create an event listener on the `#todoapp` element that listens for a `keyup` event and logs the numerical key code of the key pressed to the browser console.

## 2.3

Within the event handler function created above, check if the key pressed is the enter key. If so, log a message to the console that reads "Todo list item added."

**Hint:** Use the functionality from Ex2.1 to determine the key code for the enter key.

Merge your changes into the `exercise-02-complete` branch and create a pull request in the source repo.