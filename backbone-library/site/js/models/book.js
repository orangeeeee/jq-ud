var app = app || {};

app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.png',
		title: 'No Title',
		author: 'unKnown',
		releaseDate: 'unKnown',
		keywords: 'nothing'
	},

	idAttribute: '_id'
});