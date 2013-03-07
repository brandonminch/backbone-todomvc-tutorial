(function ($) {
	'use strict';

	// Ex3.0: Define the javascript object literal named App that will contain all of the application logic.
	var App = {
		'init': function() {
			//var newTodo = $(this).$('#new-do');
			//this.$newTodo = $('#new-todo');
			console.log('App: init');
			this.bindEvents();
		},
		'bindEvents': function() {
			$('#new-todo').on('keyup', this.create);//calls to the function below
		},
		'create': function(event) { //'event' refers to event from above ('keyup')
			if (event.keyCode == '13') {
				var value = $('#new-todo').val();
				console.log(value);
				//var itemTemplate = _.template($('#item-template').html(), {
					//'label': value
				//})
				$('#todo-list').append('<li>'+value+'</li>');
				$('#new-todo').val('');//opon <enter>, clear value from new-todo input
			};
		}
	};

	// Ex3.1: Execute the App.init method.
	App.init()

	// Ex3.2 - 3.x: See README.md

}(jQuery));