$(function () {

	//test1ボタンクリックイベント
	$('#test1-btn').on('click', function () {

		//----------------------------------------
		// 参考演算子やIf文を使用するよりsimpleで良い。
		//----------------------------------------
		console.log(testOrFunc1());
		console.log(testOrFunc1('引数で渡した!'));

		console.log('---------------');
		console.log(testAndFunc1());
		console.log(testAndFunc1('xxx'));
	});
});

testOrFunc1 = function (param) {

	var _param = param || 'unknown';
	//参考演算子を使用した場合
	//var _param = param ? param : 'unknown';

	return 'param is ' + _param;

};
testAndFunc1 = function (param) {

	var _param = param && 'unknown';

	return 'param is ' + _param;

};

cl = function(str) {
	console.log(str);
}

//falsyとtruthyについて
/*
'truty', 'falsy' のそもそもの意味は、 Boolean の 'true', 'false' ではないんだけど、評価すると 'true', 'false' と振る舞うものです。(つまり 'false' も含みます)
論理演算等で暗黙的に変換されたときの値ですね。そこから 'true values', 'false values' とも呼ばれるようです。
JavaScript であれば、 'falsy' な値として以下のものがあります。
*/
cl(false ? 'truty' : 'falsy')
cl(undefined ? 'truty' : 'falsy')
cl(null ? 'truty' : 'falsy')
cl(0 ? 'truty' : 'falsy')
cl(NaN ? 'truty' : 'falsy')
cl('' ? 'truty' : 'falsy')
