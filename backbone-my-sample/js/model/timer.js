var app = app || {};

(function () {
	'use strict';

	//Todo Model
	//-----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Timer = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			m_startTime: '',
			m_timerId: ''
		}
	});
})();
