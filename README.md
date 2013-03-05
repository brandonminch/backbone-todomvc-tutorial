# Exercise 3

## 3.0

Define a javascript [object literal](http://answers.oreilly.com/topic/2138-how-to-use-object-literals-in-javascript/) named `App` that will contain all of the application logic.
Add an `init` property to the object literal that is a `function` which logs the message "App : init"
to the console.

## 3.1

Execute `App.init` and verify that it logs "App : init" to the console.

## 3.2

Add functions named `bindEvents` and `create` to the `App` object.

Within `App.init`, execute the new `App.bindeEvents` method.

## 3.3

Within `App.bindEvents`, bind the new `App.create` method to all `keyup` events that take place on the `#new-todo` input element.

**Hint:** See jQuery's `on()` method.

## 3.4

Within `App.create`, add logic so that when a user has pressed the Enter key, a new `li` is appended to the `#todo-list` that contains the value of the `#new-todo` input.

After the todo item is added to the list. Clear the value of the `#new-todo` input.

**Hint:** See jQuery's `val()`, `html()` and `append()` methods.

## 3.4

Merge your changes into the `exercise-03-complete` branch and submit a pull request to the source repo on GitHub.