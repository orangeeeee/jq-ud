/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------

	var Workspace = Backbone.Router.extend({
		//router.routes BackBoneで用意されているもの
		routes: {
			'*filter': 'setFilter'
		},
		setFilter: function (param) {
			app.TodoFilter = param || '';

			//コレクションのfilterイベントを発生させ、
			//Todo項目の表示と非表示を切り替える。
			//app-viewのfilterイベントを呼び出す。
			window.app.Todos.trigger('filter');
		}
	});

	app.TodoRuter = new Workspace();
	Backbone.history.start();

})();
