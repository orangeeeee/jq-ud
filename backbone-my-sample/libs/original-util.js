//ライブラリとかにはしてない。


var getNow = function () {

	if (!Date.now) {
		return new Date().getTime();
	}
	return Date.now();
};


/*
性能測定用関数
インスタンス生成時に時間を取得。


終了時はgetDiffTime関数を使用し、かかった時間を取得する。
*/
function DiffTime() {
	var self = this instanceof DiffTime ? this : Object.create(DiffTime.prototype);
	self.st = getNow();
};


DiffTime.prototype = {
	//st : getNow(), //教育用に残す。
	getDiffTime: function () {
//		cl(this.st);
		var at = getNow();
		return at - this.st;
	}
};

/*
DiffTime.prototype.getDiffTime = function() {
	var at = getNow();
	return at - this.st;
};
*/
//
function assert(value, desc) {
	var resultsList = document.getElementById("results");
	if (!resultsList) {
		resultsList = document.createElement('ul');
		document.getElementsByTagName('body')[0].appendChild(resultsList);
		resultsList.setAttribute('id', 'results');
	}
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	resultsList.appendChild(li);
}

//classを持っているTagを見つけ出す。
function findClassInElements(className, type) {

	//typeが空の場合は、ワイルドカードですべてのタグを取得する。
	var elems = document.getElementsByTagName(type || "*");

	//(^|\\s)任意のunicodeの空白文字（space,tab,改行など）かそのまま開始の場合
	var regex = new RegExp("(^|\\s)" + className + ("\\s|$"))

	var resulets = [];

	for (var i = 0, length = elems.length; i < length; i++) {

		if (regex.test(elems[i].className)) {
			resulets.push(elems[i]);
		}
	}
	return resulets;
};

//log出力関数
var cl = function (str) {
	console.log(str);
};
