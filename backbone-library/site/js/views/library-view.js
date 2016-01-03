app = app || {};

app.LibraryView = Backbone.View.extend({
	//div
	el: '#books',

	initialize: function (initialBooks) {
		this.collection = new app.Library(initialBooks);
		//Collectionのfetchは、サーバーからcollectionのデータを取得する為に使用する。
		//コレクションのurl('url: '/api/books'')に対して、
		//GET形式のHTTPリクエストを送信し、レスポンスとして、JSON形式の配列を受け取ります。
		this.collection.fetch();
		this.render();
		//新しくmodelが追加された場合に起こるイベント
		//'click #add': 'addBook'で「追加」ボタンのイベントが起こり
		//モデルをcollectionにadd後に走る。
		this.listenTo( this.collection, 'add', this.renderBook );
		//取得が完了すると呼ばれ、描画を行う。
		this.listenTo( this.collection, 'reset', this.render );
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

		$( '#addBook div' ).children( 'input' ).each( function( i, el ) {
			if( $( el ).val() != "" )
			{
				if( el.id === 'keywords' ) {
					formData[ el.id ] = [];
					_.each( $( el ).val().split( ' ' ), function( keyword ) {
						formData[ el.id ].push({ 'keyword': keyword });
					});
				} else if( el.id === 'releaseDate' ) {
					formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
				} else {
					formData[ el.id ] = $( el ).val();
				}
			}
		});
		//this.collection.add(new app.Book(formData));
		//collection.createは、コレクションのURLに対して、
		//PUT形式のHTTPリクエストを送信する。
		this.collection.create( formData );
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
