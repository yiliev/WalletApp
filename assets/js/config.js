angular.module('walletApp.config', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', { templateUrl: '/assets/partials/page-wallet.html' })
			.otherwise({redirectTo: '/'});
			
	}]);