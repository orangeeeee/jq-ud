$(function () {

	var array = [];
	var i = 0;
	for (i = 0; i < 200000; i++) {
		array[i] = i;
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
	
});
