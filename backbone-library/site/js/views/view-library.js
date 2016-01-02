var app = app || {};

//リスト自身の為のView
app.LibraryView = Backbone.View.extend({
	el: '#books',
	
	initialize:function(initalBooks) {
		this.collection = new app.Library(initalBooks);	
	}
});
