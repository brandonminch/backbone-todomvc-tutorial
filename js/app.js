(function ($) {
	'use strict';

	var App = {
		'init': function() {
			this.$newTodo = $('#new-todo');

			this.bindEvents();

			console.log('App: init');
		},

		'bindEvents': function() {
			this.$newTodo.on('keyup', this.create); // calls to the function below
		},

		'create': function(event) { // 'event' refers to event from above ('keyup')
			if (event.which == '13') { // use 'which' instead of keyCode for cross-browser support
				var value = App.$newTodo.val();

				$('#todo-list').append('<li>' + value + '</li>');

				App.$newTodo.val(''); // upon <enter>, clear value from new-todo input
			}
		}
	};

	App.init(); // Initialize the application

}(jQuery));