var app = app || {};

(function () {
	'use strict';
	
	//Todo Collection
	//-----------

	//　localStrageを利用する。
	var TodoList = Backbone.Collection.extend({

		// Collectionに含まれるModel
		model: app.Todo,

		//todos-backboneという名前にすべてのTodo項目を保存。
		localStorage: new Backbone.LocalStorage('todos-backbone'),

		//完了済の項目を配列として返す。
		completed: function () {
			//this.filterは、underscore.jsのfilterメソッド
			return this.filter(function (todo) {
				return todo.get('completed');
			});
		},
		//未了の項目を配列として返す。
		remaining: function () {
			/*
			  this.without、underscore.jsのwithoutメソッド
			  applyを使用することにより、without関数内で、
			  thisが指すコンテキストを私用できる。
			  
			  without_.without(array, *values) 
			  Returns a copy of the array with all instances of the values removed.
			  _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
			  => [2, 3, 4]
			*/
			return this.without.apply(this, this.completed());
		},
		nextOrder: function () {
			console.log("nextOrder start");
			console.log("this:" + this);

			if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
		},
		//Todo項目を作成順にソート
		comparator: function (todo) {
			return todo.get('order');
		}
	});

	//CollectionをGlobalに作成
	app.Todos = new TodoList();

})();
