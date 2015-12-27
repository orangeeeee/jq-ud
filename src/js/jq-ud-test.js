$(function () {

	var array = [];
	var i = 0;
	for (i = 0; i < 200000; i++) {
		array[i] = i;
	}

	var names = [];
	var i = 0;
	for (i = 0; i < 200000; i++) {
		names[i] = "Fred";
	}

	$('#each-test').click(function () {

		var beforeTime = new Date();
		jQuery.each(array, function (index) {
			//console.log('j:' + value);        
		});

		var afterTime = new Date();
		var diff = afterTime - beforeTime;
		$('#j-result-1').html(diff + 'ms');

		/** underscoreJS test */
		var beforeTime_u = new Date();

		_.each(array, function (num) {
			//console.log('u:' + num);
		});

		var afterTime_u = new Date();
		var diff_u = afterTime_u - beforeTime_u;

		$('#u-result-1').html(diff_u + 'ms');


	});

	$('#upper-test').click(function() {

		/** ES4 less code */
		var beforeTime = new Date();

		var upper = [];
		for (var i = 0, n = names.length; i < n; i++) {
			upper[i] = names[i].toUpperCase();
		}
		//console.log(upper);

		var afterTime = new Date();
		var diff = afterTime - beforeTime;
		$('#for-result-1').html(diff + 'ms');

		/** ES5 and later code */
		var beforeTime_map = new Date();

		var upperM = names.map(function (name) {
			return name.toUpperCase();
		});
		//console.log(upperM);
		
		var afterTime_map = new Date();
		var diff_map = afterTime_map - beforeTime_map;

		$('#map-result-1').html(diff_map + 'ms');

	});

});
