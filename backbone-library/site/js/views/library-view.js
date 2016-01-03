app = app || {};

app.LibraryView = Backbone.View.extend({
	//div
	el: '#books',

	initialize: function (initialBooks) {
		this.collection = new app.Library(initialBooks);
		this.render();
		//新しくmodelが追加された場合に起こるイベント
		//'click #add': 'addBook'で「追加」ボタンのイベントが起こり
		//モデルをcollectionにadd後に走る。
		this.listenTo( this.collection, 'add', this.renderBook );
	},

	events: {
		'click #add': 'addBook'
	},

	addBook: function (e) {
		//イベントがキャンセル可能である場合、上位ノードへのイベントの
		//伝播 (propagation) を止めずに、そのイベントをキャンセルします。
		//再描画を避けるためにイベントをキャンセルする。
		e.preventDefault;

		var formData = {};

		$('#addBook div').children('input').each(function (i, el) {

			if ($(el).val() != '') {
				console.log('el.id:' + el.id);
				formData[el.id]	 = $(el).val();
			}
		});
		this.collection.add(new app.Book(formData));
	},
	
	// render library by rendering each book in its collection
	render: function () {
		this.collection.each(function (item) {
			this.renderBook(item);
		}, this);
	},

	// render a book by creating a BookView and appending the
	// element it renders to the library's element
	//個々の本の描画を行う。
	renderBook: function (item) {
		var bookView = new app.BookView({
			model: item
		});
		//id="books"の一番後ろに挿入。
		this.$el.append(bookView.render().el);
	}
	
});
