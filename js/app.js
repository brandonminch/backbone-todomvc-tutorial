(function ($) {
	'use strict';

	// Ex2.1: Create an event listener that listens for a click event
	// on example tasks and adds a class of "editing" to the selected task.
	$('#todo-list li').on('click', function() {
		$(this).addClass('editing');
		$(this).siblings().removeClass('editing');
	})
	$('#new-todo').on('click', function() {
		$('#todo-list li').removeClass('editing');
	})
	// Delegate all events to todoapp
	$('#todoapp').on('click', '#todo-list li', function(event) {
		var $target = $(event.currentTarget);
	})

	// Ex2.2: Create an event listener that logs which key was pressed.
	$('#todoapp').on('keyup', function(event) {
		console.log(event.keyCode);
	})

	// Ex2.3: Update the event handler above to log a message
	// to the console if the enter key was pressed.
	$('#todoapp').on('keyup', function(event) {
		if (event.keyCode == '13') {
			console.log('Todo list item added');
		};
		
	})

}(jQuery));