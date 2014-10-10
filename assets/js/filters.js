angular.module('walletApp.filters', [])

	.filter('repeat', function() {
		return function(input, times) {			
			times = parseInt(times);
			var inputCopy = input;
			input = "";
			for (var i=0; i<times; i++) {
				input += inputCopy;			
			} 
			return input;
		};
	})

	.filter('nospace', function () {
	    return function (value) {
	        return (!value) ? '' : value.replace(/ /g, '');
	    };
	})
	
	.filter('dateToISO', function() {
		return function(input) {
			return new Date(input).toISOString();
		};
	}) 

	;