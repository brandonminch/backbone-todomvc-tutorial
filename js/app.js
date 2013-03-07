(function ($) {
	'use strict';

	// Ex3.0: Define the javascript object literal named App that will contain all of the application logic.
	var App = {
		'init': function() {
			this.$newTodo = $('#new-todo');

			this.bindEvents();

			console.log('App: init');
		},
		'bindEvents': function() {
			this.$newTodo.on('keyup', this.create);//calls to the function below
		},
		'create': function(event) { //'event' refers to event from above ('keyup')
			if (event.keyCode == '13') {
				var value = App.$newTodo.val();

				$('#todo-list').append('<li>' + value + '</li>');

				App.$newTodo.val('');//opon <enter>, clear value from new-todo input
			}
		}
	};

	// Ex3.1: Execute the App.init method.
	App.init();

}(jQuery));