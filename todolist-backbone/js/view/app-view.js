//Element controllerというパターンを採用。
//Collectionと各項目をみるViewを分ける。

/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};
(function ($) {
	//	$(function () {
	'use strict';

	// The Application
	// ---------------
	// Our overall **AppView** is the top-level piece of UI.
	//AppViewはアプリケーション全体のUIを表します。
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		//sectionタグの下を全部取ってくる。
		el: '#todoapp',

		//画面下端に表示される
		statsTemplate: _.template($('#stats-template').html()),

		// Delegated（委譲）events for creating new items, and clearing completed ones.
		events: {
			'keypress #new-todo': 'createOnEnter',
			'click #clear-completed': 'clearCompleted',
			'click #toggle-all': 'toggleAllComplete'
		},
		initialize: function () {
			//DOMの要素を取得し、変数に入れる。
			this.allCheckbox = this.$('#toggle-all');
			this.$input = this.$('#new-todo');
			this.$footer = this.$('#footer');
			this.$main = this.$('#main');

			//addイベントが発生すると、addOneメソッドを実行。
			this.listenTo(app.Todos, 'add', this.addOne);
			this.listenTo(app.Todos, 'reset', this.addAll);
			this.listenTo(app.Todos, 'change:completed', this.filterOne);
			this.listenTo(app.Todos, 'filter', this.filterAll);
			this.listenTo(app.Todos, 'all', this.render);

			//collection(app.Todos = new TodoList();)
			//collection.fetch([options])
			//??
			app.Todos.fetch();
		},
		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			var completed = app.Todos.completed().length;
			var remaining = app.Todos.remaining().length;

			if (app.Todos.length) {
				this.$main.show();
				this.$footer.show();

				this.$footer.html(this.statsTemplate({
					completed: completed,
					remaining: remaining
				}));

				this.$('#filters li a')
					.removeClass('selected')
					.filter('[href="#/' + (app.TodoFilter || '') + '"]')
					.addClass('selected');
			} else {
				this.$main.hide();
				this.$footer.hide();
			}

			this.allCheckbox.checked = !remaining;
		},

		//指定されたTodo項目の為のViewを作成し、<ul>要素の直下に挿入します。
		addOne: function (todo) {
			var view = new app.TodoView({
				model: todo
			});
			$('#todo-list').append(view.render().el);
		},

		// Add all items in the **Todos** collection at once.
		addAll: function () {
			$('#todo-list').html('');
			app.Todos.each(this.addOne, this);
		},

		filterOne: function (todo) {
			todo.trigger('visible');
		},

		filterAll: function () {
			app.Todos.each(this.filterOne, this);
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {
			return {
				title: this.$input.val().trim(),
				order: app.Todos.nextOrder(),
				completed: false
			};
		},

		// If you hit return in the main input field, create new **Todo** model,
		// persisting it to *localStorage*.
		//idがnew-todのdomで'keypress'イベントが発生したら動く。
		createOnEnter: function (e) {
			//値が入っていて、Enterキーが押下された場合
			if (e.which === ENTER_KEY && this.$input.val().trim()) {

				app.Todos.create(this.newAttributes());
				//入力フィールドをリセット
				this.$input.val('');
			}
		},

		// Clear all completed todo items, destroying their models.
		clearCompleted: function () {
			_.invoke(app.Todos.completed(), 'destroy');
			return false;
		},

		toggleAllComplete: function () {
			var completed = this.allCheckbox.checked;

			app.todos.each(function (todo) {
				todo.save({
					completed: completed
				});
			});
		}
	});
	//	});
})(jQuery);
