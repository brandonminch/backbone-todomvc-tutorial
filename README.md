# Exercise 4

## 4.0

Include the [underscore.js](http://www.underscorejs.org) library in index.html above the app.js script.

## 4.1

Using the underscore `_.template` function, refactor the `App.create` method to append the new todo using the `#item-template` script and interpolate the value of the `#new-todo` input as a template variable within the `<label>` tag of the template.

In addition, update the template to set the `value` attribute of the `.edit` input to the value of `#new-todo`.

**Bonus:** HTML-escape the string that is interpolated in the template. **Hint:** See the underscore [template](http://underscorejs.org/#template) documentation.

## 4.2

Create a new method within the App object named `edit`.

In `App.bindEvents`, add a new event binding that executes the `App.edit` method when a user double clicks on the `label` element of a todo list item.

Within `App.edit`,  write logic to perform the following:

* Add a class of "editing" to the parent `<li>` of the label that was clicked. **Hint:** See jQuery's `.closest()` method

* Set focus on the `.edit` input. **Hint:** See jQuery's `.focus()` method

## 4.3

Create a new method within the App object named `update`.

In `App.bindEvents`, add a new event binding that executes the `App.update` method when a user hits enter on the `.edit` input.

Within `App.update`, write logic to perform the following:

* Remove focus from the `.edit` input. **Hint:** See jQuery's `.blur()` method

* Change the value of the current todo item's `<label>` element to that of the `.edit` input.

* Remove the class of "editing" from the current todo item's parent `<li>`.

## 4.4

Merge your changes into the `exercise-04-complete` branch and submit a pull request to the source repo on GitHub.