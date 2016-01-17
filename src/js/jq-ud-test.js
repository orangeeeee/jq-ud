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

		var diffTime = new DiffTime();

		cl(diffTime.constructor);
		cl(diffTime.constructor.prototype);

		jQuery.each(array, function (index) {
			//console.log('j:' + value);        
		});

		var diff = diffTime.getDiffTime();

		$('#j-result-1').html(diff + 'ms');

		/** underscoreJS test */
		var diffTime_u = new DiffTime();

		_.each(array, function (num) {
			//console.log('u:' + num);
		});

		var diff_u = diffTime_u.getDiffTime();

		$('#u-result-1').html(diff_u + 'ms');


	});

	$('#upper-test').click(function () {

		/** ES4 less code */
		var diffTime = new DiffTime();

		var upper = [];
		for (var i = 0, n = names.length; i < n; i++) {
			upper[i] = names[i].toUpperCase();
		}

		var diff = diffTime.getDiffTime();
		$('#for-result-1').html(diff + 'ms');

		/** ES5 and later code */
		//var beforeTime_map = new Date();
		var diffTime_map = new DiffTime();

		var upperM = names.map(function (name) {
			return name.toUpperCase();
		});
		//console.log(upperM);

		var diff_map = diffTime_map.getDiffTime();

		$('#map-result-1').html(diff_map + 'ms');

	});
});
