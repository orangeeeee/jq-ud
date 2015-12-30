var Todo = Backbone.Model.extend({

	/*---------------------------------------
	 ユーザが指定したデータが不完全だった場合などに備えて、
	 モデルに対してデフォルトの属性値をセットしておきたい場合に使用する。
	*/
	default: {
		//title: '',
		completed: false
	},
	//値が正しい場合、何もreturnしてはならない。
	validate: function (attribs) {
		if (attribs.title === undefined) {
			return "タイトルを付けてください。";
		}
	},

	// Modelのインスタンスが作成された際に呼び出される処理（作成は任意）
	initialize: function () {
		console.log('モデルが初期化されました。');

		//Modelの変化の漢詩
		this.on('change', function () {
			console.log('Model value has been changed.')
		});
		/*
		  titleのみ変更された場合は、以下のようにイベント監視する。
		　on('change:title')
		*/
		//ModelのvalidationErrorプロパティに、
		//validate()メソッドから返された値が設定される。
		this.on('invalid', function (model, error) {
			console.log(error);
		});
	}
}); //Model definition end

var TodosView = Backbone.View.extend({

	//elにDOMに追加する要素を追加していく。
	tagName: 'ul',
	className: 'container',
	id: 'todos'

});


//仮のイベント取得
$(function () {

	$('#add-btn').click(function () {
		var myTodo = new Todo();
		myTodo.set('completed', true, {
			validate: true
		});
		console.log('タイトルが変更されました' + myTodo.get('title'));

		var todosView = new TodosView();
		console.log(todosView.el);
		/*
		Viewの呼び出しについて
		jQueryと組み合わせられる。
		View.$(selector) は、$(view.el).find(selector)と同様。
		*/
		
		var view = new Backbone.View();
		view.setElement('<p><a><b>test</b></a></p>');
		//.htmlは、マッチした1つ目の要素のHTMLを返します。
		console.log(view.$('a').html());
		console.log(view.el);
	});
});
