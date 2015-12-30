var Todo = Backbone.Model.extend({

	/*---------------------------------------
	 ユーザが指定したデータが不完全だった場合などに備えて、
	 モデルに対してデフォルトの属性値をセットしておきたい場合に使用する。
	*/
	default: {
		title: '',
		completed: false
	}
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
		//
		this.on("invalid")

	},
});

$(function () {

	$('#add-btn').click(function () {
		var myTodo = new Todo();
		myTodo.set('title', '属性値が変化するとLisnerが呼び出される。');
		console.log('タイトルが変更されました' + myTodo.get('title'));

	});
});
