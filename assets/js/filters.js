angular.module('walletApp.filters', [])
	
	.filter('dateToISO', function() {
		return function(input) {
			return new Date(input).toISOString();
		};
	})  

	;