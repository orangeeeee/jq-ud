$(function () {

	var f = function () {

		return "xxxx";
	};
	var b = function (funcX) {

		return funcX;

	}

	function fn(arg1, arg2) {
		/*
		arguments はすべての関数内で利用可能なローカル変数です。
		Function のプロパティとしての arguments はもはや使用されません。
		arguments オブジェクトを使うことにより、関数内で関数の引数を参照できます。
		このオブジェクトは、関数に渡された各引数に対する入力を含みます。
		最初の入力の添え字は 0 から始まります。
		*/
		return arguments;
	};


	var Girl = function () {
		this.name = '女の子';
		this.place = 'トイレ';
		this.enterToilet = function () {

			console.log(this.name + "が女子" + this.place + "に入る。");
		};
	};
	var Boy = function () {

		this.name = "男の子";
		this.place = "更衣室";
	}

	$('.test-btn').click(function () {

		var s = new String("hello");
		s + " world";

		console.log("String:" + typeof s);
		console.log("moji:" + typeof "hellow");

		var a = b(f());

		console.log(a);

		//console.log(fn.apply({}, ['foo', 'bar']));
		//console.log(fn.call({}, 'foo', 'bar'));

		new Girl().enterToilet();
		//thisが引数になる。
		new Girl().enterToilet.call(new Boy);

	});


	var hoge = function (str_value) {

		console.log(str_value);
	};

	var hoge2 = function () {
		console.log(this);
	};

	var hoge3 = {

		echo: function () {
			console.log(this);
		}
	};

	var Hogeee = function () {};
	Hogeee.prototype.echo = function () {
		console.log('hogeee');
	}
	var Fugaaa = function () {};


	$('.test-btn2').click(function () {

		//どちらでも同じ出力結果。
		//hoge2で何も指定しなかった場合にwindow objectが出力されるのと同じ仕組み。
		/*
		hoge.call(window, 'fuga');
		hoge.call({}, 'fuga');
		*/
		//第一引数はnullやundefinedでも、暗黙的に
		//global object(window)に変換される。
		/*
		hoge.call(null, 'null fuga');
		hoge.call(undefined, 'undefined fuga');
		*/
		//windowオブジェクトが出力される。　
		//hoge2();

		//hoge3.echo();

		var h = new Hogeee;
		var f = new Fugaaa;
		h.echo.call(f);

		//見た目はArrayだが、Arrayのメソッドを持っていない。
		var array_like_anchors = document.getElementsByTagName('a');

		console.log(array_like_anchors);
		//sliceメソッドをdomから取得したobject(array_like_anchors)は、
		//持っていない為、Arrayを使用して、メソッドを実行する。
		var anchors = Array.prototype.slice.call(array_like_anchors);

		console.log(anchors);
		//先頭から１要素ずつ配列から取り出す。
		console.log(anchors.shift());
		console.log(anchors);
		console.log(anchors.shift());
		console.log(anchors);
	});

	function hash(password) {
		password + '1';
		return password;

	};

	var i = 0;

	function User2(name, passwordHash) {
		'use strict'
		console.log(i++);
		if (!(this instanceof User)) {
			//自分自身を呼び出している。
			return new User(name, passwordHash);
		}
		this.name = name;
		this.passwordHash = passwordHash;
	};

	/**
	（改良版）ES5以上の場合に可能
	でもなんか嫌い。
	*/
	function User(name, passwordHash) {
		'use strict'
		//prototypeを受け取り、それを受け継いだ新しいobjectを作成する。
		var self = this instanceof User ? this : Object.create(User.prototype);
		self.name = name;
		self.passwordHash = passwordHash;


		return self;
	};

	//インスタンスに設定すると、その関数の複数のコピーがInstance Objectごとに１個作られる。
	//新しくprototypeにtoStringを追加。
	User.prototype.toString = function () {
		return "[User " + this.name + "]";
	};

	//新しくprototypeにcheckPasswordを追加
	User.prototype.checkPassword = function (password) {
		return hash(password) === this.passwordHash;
	};


	$('.test-btn3').click(function () {

		//		var u = new User("sflken", "0ef33aexxw023421sf0384p23q");
		var u = User("sflken", "0ef33aexxw023421sf0384p23q");
		console.log(Object.getPrototypeOf(u) === User.prototype);
		console.log(u.name);
		console.log(u.toString());
		console.log(u.checkPassword('abcxxx'));
	});

	/*
		private data の格納にはクロージャーを使用しよう。
		JavaScriptは情報隠蔽に使用できる非常に信頼性の高い機能としてクロージャーを提供している。
		クロージャーに囲まれた変数には直接アクセスできない。
		アクセスするには、、そのデータへのアクセスを明示的に提供する関数を使用することだ。
	*/


	function Tree(x) {
		var self = this instanceof Tree ? this : Object.create(Tree.prototype);
		self.value = x;
		self.childlen = [];
		return self;
	}

	Tree.prototype = {
		/*prototypeに変数を持つとインスタンスごとに値を持つのではなく、
		 すべてのインスタンスが同じ値を共有してしまうので、
		 Treeオブジェクトにchildren[]を持つようにする。
		*/
		//childlen : [],
		addChild: function (x) {
			this.childlen.push(x);
		}
	};

	$('.test-btn4').click(function () {

		//追加したものはすべて、Tree.prototype.childlenに追加される。

		var left = new Tree(2);
		left.addChild(1);
		left.addChild(3);

		var right = new Tree(6);
		right.addChild(5);
		right.addChild(7);

		var top = new Tree(4);
		top.addChild(left);
		top.addChild(right);

		//結果を出力
		console.log(top.children);
	});


	//Read CSV
	function CSVReader(separators) {

		this.separators = separators || [","];

		this.regexp =
			new RegExp(this.separators.map(function (sep) {
				return "\\" + sep[0];
			}).join("|"));
	};


	CSVReader.prototype.read = function (str) {
		//splitは、Arrayオブジェクトを返す。
		var lines = str.trim().split(/\n/);
		/*
		
		*/
		return lines.map(function (line) {
			return line.split(this.regexp);
		});
	};



	$('.test-btn5').click(function () {

		//console.log(Object.keys(window));
		var reader = new CSVReader();
		console.log(reader.read("a,b,c\nd,e,f\n"));

		var names = ["Fred", "Wilma", "Pebbles"];
		var upper = [];

		for (var i = 0, n = name.length; i < n; i++) {
			upper[i] = names[i].toUpperCase();
		}
		console.log(upper);

	});


	var aIndex = "a".charCodeAt(0);

	function rtest1() {

		var alphabet = "";
		for (var i = 0; i < 26; i++) {
			alphabet += String.fromCharCode(aIndex + i);
		}
		console.log(alphabet);
	};

	function rtest2() {
		var digits = "";
		for (var i = 0; i < 10; i++) {
			digits += i;
		}
		console.log(digits);
	};

	function rtest3() {

		var romdom = "";
		for (var i = 0; i < 8; i++) {
			romdom += String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
		}
		console.log(digits);
	};

	/*
	
		callbackの使い方を学ぶのに適切な例。
	
	*/
	function buildString(n, callback) {

		var result = "";
		for (var i = 0; i < n; i++) {
			//ここだけ関数を変えたい!!
			result += callback(i);
		}
		return result;
	};

	function NaiveDirct() {

	};

	$('#test-btn6').click(function () {

		//test1をcallbackを使用した方法に変更。
		console.log(buildString(26,
			function (i) {
				return String.fromCharCode(aIndex + i)
			}));
		//test2を変更
		console.log(buildString(10,
			function (i) {
				return i;
			}));
		//test3を変更
		console.log(
			buildString(8, function () {
				return String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
			}));

		var dict = new NaiveDirct();
		dict.alice = 34;
		dict.bob = 24;
		dict.chris = 62;
		console.log(Object.keys(dict));
		console.log(dict);
	});

	function averageOfArray() {

		for (var i = 0, sum = 0, n = arguments.length; i < n; i++) {
			sum += arguments[i];
		}
		return sum/n;
	};
	
	function average() {
		return averageOfArray.apply(null,arguments);
	};
	$('#test-btn7').click(function () {

		arrayArg = [2, 7, 1, 8, 2, 8, 1, 8];

		console.log(averageOfArray.apply(null,arrayArg));
		console.log(average(arrayArg));
	});
});
