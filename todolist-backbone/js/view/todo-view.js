/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Todo Item View
	// --------------

	// The DOM element for a todo item...
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName: 'li',

		// Cache the template function for a single item.
		template: _.template($('#item-template').html()),

		// The DOM events specific to an item.
		events: {
			'click .toggle': 'toggleCompleted',
			//label項目をダブルクリックした際に動くイベント
			'dblclick label': 'edit',
			'click .destroy': 'clear',
			'keypress .edit': 'updateOnEnter',
			//label項目の編集を終え、フォーカスアウトした際に動くイベント
			'blur .edit': 'close'
		},

		// The TodoView listens for changes to its model, re-rendering. Since
		// there's a one-to-one correspondence between a **Todo** and a
		// **TodoView** in this app, we set a direct reference on the model for
		// convenience.
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.listenTo(this.model, 'visible', this.toggleVisible);
		},

		// Re-render the titles of the todo item.
		render: function () {

			this.$el.html(this.template(this.model.toJSON()));
			this.toggleVisible();
			this.$input = this.$('.edit');

			return this;
		},

		toggleVisible: function () {
			console.log('toggleVisible');
			this.$el.toggleClass('hidden', this.isHidden());
		},
		//項目を非表示にするべきか判定する。
		isHidden: function () {
			return this.model.get('completed') ?
				app.TodoFilter === 'active' :
				app.TodoFilter === 'completed';
		},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {
			this.model.toggle();
		},
		// Switch this view into `"editing"` mode, displaying the input field.
		//label項目をダブルクリックした際に動くイベント
		//'dblclick label': 'edit',
		//editingクラスは、
		edit: function () {
			//<div class="view">を消し、テキストボックスを表に見せる。
			this.$el.addClass('editing');
			//this.$input = this.$('.edit');
			this.$input.focus();
		},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function () {
			
			var value = this.$input.val();

			if (value) {
				this.model.save({
					title: value
				});
			} else {
				this.clear();
			}

			this.$el.removeClass('editing');
		},

		// If you hit `enter`, we're through editing the item.
		//Enterキーが押されたら編集モードを解除。
		updateOnEnter: function (e) {
			if (e.which === ENTER_KEY) {
				this.close();
			}
		},
		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
	});
})(jQuery);
