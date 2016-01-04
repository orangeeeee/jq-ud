//ライブラリとかにはしてない。


var getNow = function() {
	
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
		cl(this.st);
		var at = getNow();
		return at - this.st;
	}
};

//log出力関数
var cl = function (str) {
	console.log(str);
};

