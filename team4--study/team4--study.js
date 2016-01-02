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
	//var _param = (param === undefined) ? 'unknown' : param;

	return 'param is ' + _param;

};
testAndFunc1 = function (param) {

	var _param = param && 'unknown';

	return 'param is ' + _param;

};
