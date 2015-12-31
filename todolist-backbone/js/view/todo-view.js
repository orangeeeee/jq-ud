/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

//(function ($) {
//	(function () {
		//'use strict';

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
				'dblclick label': 'edit',
				'keypress .edit': 'updateOnEnter',
				'blur .edit': 'close'
			},

			// The TodoView listens for changes to its model, re-rendering. Since
			// there's a one-to-one correspondence between a **Todo** and a
			// **TodoView** in this app, we set a direct reference on the model for
			// convenience.
			initialize: function () {
				this.listenTo(this.model, 'change', this.render);
			},

			// Re-render the titles of the todo item.
			render: function () {
				// Backbone LocalStorage is adding `id` attribute instantly after
				// creating a model.  This causes our TodoView to render twice. Once
				// after creating a model and once on `id` change.  We want to
				// filter out the second redundant render, which is caused by this
				// `id` change.  It's known Backbone LocalStorage bug, therefore
				// we've to create a workaround.
				// https://github.com/tastejs/todomvc/issues/469
				if (this.model.changed.id !== undefined) {
					return;
				}

				this.$el.html(this.template(this.model.toJSON()));
				this.$input = this.$('.edit');
				return this;
			},

			toggleVisible: function () {
				this.$el.toggleClass('hidden', this.isHidden());
			},

			// Switch this view into `"editing"` mode, displaying the input field.
			edit: function () {
				this.$el.addClass('editing');
				this.$input.focus();
			},

			// Close the `"editing"` mode, saving changes to the todo.
			close: function () {
				var value = this.$input.val();

				if (value) {
					this.model.save({
						title: value
					});
				}

				this.$el.removeClass('editing');
			},

			// If you hit `enter`, we're through editing the item.
			//Enterキーが押されたら編集モードを解除。
			updateOnEnter: function (e) {
				if (e.which === ENTER_KEY) {
					this.close();
				}
			}
		});
//	});
//})(jQuery);
