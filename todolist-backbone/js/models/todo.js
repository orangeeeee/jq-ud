var app = app || {};

(function () {
	'use strict';

	//Todo Model
	//-----------

	app.Todo = Backbone.Model.extend({

		default: {
			title: '',
			completed: false
		},

		//completed属性の値をトグルします。
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});

		}
	});

})();
