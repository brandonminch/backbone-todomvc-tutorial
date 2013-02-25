# Exercise 1

## 1.0

Add a text input with an `id` of "new-todo" and placeholder text that reads "What needs to be done?"

## 1.1

Add the following elements:

   * Checkbox input with an `id` of "toggle-all"

   * Label for #toggle-all input that reads "Mark all as complete" (Make sure to add the "for" attribute)
   * Empty unordered list with an `id` of "todo-list"

## 1.2

**Underscore.js**

Underscore is a javascript library that provides many useful methods for interacting with objects, arrays and collections. It is also a dependency of Backbone.js and provides the ability to create reusable html templates that can evaluate in-line javascript prior to the template being rendered on the page.

Underscore templates can be created within the markup of the page. The templates should be wrapped in `<script>` tags with a "type" of "text/template". This prevents them from being rendered on page load. You should also give your template `<script>` tag a unique `id` so it can be referenced by the app using jQuery.

For now you will create the basic markup for the templates. We will add the underscore javascript functionality later.

Create an underscore template with an `id` of "item-template" that contains the following elements:

* `<div>` with a `class` of "view"
  * Checkbox `<input>` with a `class` of "toggle"
  * Empty `<label>` element
  * `<button>` with a `class` of "destroy"
* `<input>` with a `class` of "edit"

Create an underscore template with an `id` of "stats-template" that contains the following elements:

* `<span>` with an `id` of "todo-count"
* `<ul>` with an `id` of "filters"
  * `<li>`
    * `<a>` with a `class` of "selected",  `href` of "#/", and text that reads: "All"
  * `<li>`
     * `<a>` with an `href` of "#/active", and text that reads "Active"
  * `<li>`
     * `<a>` with an `href` of "#/completed" and text that reads "Completed"
* `<button>` with an `id` of "clear-completed" and text that reads "Clear Completed"

## 1.3

Using git, commit your changes locally with a commit message describing what has changed.

Push your changes to your remote repo on github.

Login to Github.com and go to the source repo at https://github.com/brandonminch/backbone-todomvc-tutorial. Create a pull request to have your changes merged into the 
