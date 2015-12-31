var app = app || {};

(function () {
	'use strict';

	//Todo Model
	//-----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			console.log('toggle:' + this.get('completed'));
			//saveメソッドは、changeイベントを発生させる。
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
