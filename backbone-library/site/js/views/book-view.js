var app = app || {};

//本を表示する為のView
app.BookView = Backbone.View.extend({

	tagName: 'div',
	className: 'bookContainer',
	template: _.template($('#bookTemplate').html()),

	events: {
		'click .delete': 'deleteBook'
	},
	
	deleteBook: function () {
		//Delete model
		//Modelのdestroyは、コレクションのURLに対して、
		//DELETE形式のHTTPリクエストを送信する。
		this.model.destroy();

		//Delete view
		this.remove();
	},
	
	render: function () {
		//this.$elはtagNameで指定したオブジェクト。
		//jQueryのhtml()関数を呼び出す際に利用できます。
		//modelの値をtemplateに反映。
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});
