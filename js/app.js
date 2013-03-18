(function ($) {
	'use strict';

	var App = {
		'init': function() {

			this.$todoApp = $('#todoapp');
			this.$newTodo = $('#new-todo');

			this.bindEvents();

			//console.log('App: init');
		},

		'bindEvents': function() {
			this.$todoApp.on('keyup', '#new-todo', this.create) // calls to the function below in App.create
				.on('dblclick', 'label', this.edit) //execute App.edit when double-click on label
				.on('keyup', '.edit', this.update); //execute App.update when hit enter on .edit
		},

		'create': function(event) { // 'event' refers to event from above ('keyup')
			if (event.which == '13') { // use 'which' instead of keyCode for cross-browser support
				var value = App.$newTodo.val(),
					itemTemplate = _.template($('#item-template').html(), {
						'label': value
					});

				//console.log(value);

				$('#todo-list').append(itemTemplate);//append new template

				App.$newTodo.val(''); // upon <enter>, clear value from new-todo input
			}
		},
		'edit': function(event) {
			var $target = $(event.currentTarget),
				$li = $target.closest('li');
			$li.addClass('editing');
			$li.find('.edit').focus();
		},
		'update': function(event) {
			if (event.which == '13') {
				var $target = $(event.currentTarget),
					$li = $target.closest('li'),
					$edit = $li.find('.edit');
				//console.log($edit.val());
				$edit.blur();
				$li.find('label').html($edit.val());
				$li.removeClass('editing');
			}
		}
	};

	App.init(); // Initialize the application

}(jQuery));