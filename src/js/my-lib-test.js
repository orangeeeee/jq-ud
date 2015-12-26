/*
引数にwindow持った即時関数(IIFE)。
()(window);
*/
(function (window, undefined) {

	// Use the correct document accordingly with window argument (sandbox)
	var document = window.document;
	/*
	① この部分を$(function() {});で呼び出している。
	*/
	var jQuery = (function () {



	});
	//jQueryオブジェクトを$,jQueryに設定。
	window.jQuery = window.$ = jQuery;
	//・・・・
})(window);
