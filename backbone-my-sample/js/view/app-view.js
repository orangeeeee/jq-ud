//Element controllerというパターンを採用。
//Collectionと各項目をみるViewを分ける。

/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};


(function ($) {

	'use strict';

	app.AppView = Backbone.View.extend({

		//必ずelが必要。出ないとイベントを拾えない。
		el: '#stopwatchapp',
		//programで使用すう変数。
		timerText: '',
		lapTime: 0,
		timerId:'',
		startTime:0,

		events: {
			'click #start': 'start',
			'click #stop': 'stop',
			'click #reset': 'reset'
		},
		initialize: function () {
			//setTimeの中から参照できない。
			//モデルの変更をもとにviewが更新するようにしないといけない？
			this.timerText = this.$('#timerText');
		},
		start: function () {

			var nowDate = Date.now();
			this.startTime = nowDate;
			//ここは、thisを付けないと関数を呼べない。
			this.updateTimerText(this);
		},

		stop: function () {
			//			stopflg = true;
			this.lapTime += Date.now() - this.startTime;
			console.log(this.lapTime);
			clearTimeout(this.timerId);
		},

		reset: function () {

			clearTimeout(this.timerId);
			this.timerText.html("0.00");
			this.lapTime = 0;
			
		},
		updateTimerText: function (_self) {

			_self.timerId = setTimeout(function () {

				//あとでgetNowに変更		
				var t = Date.now() - _self.startTime + _self.lapTime;
				var setDomTime = (t / 1000).toFixed(2);
				_self.timerText.html(setDomTime);
				_self.updateTimerText(_self);
			}, 10);
		}
	});
})(jQuery);
