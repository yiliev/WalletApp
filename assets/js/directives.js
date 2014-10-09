angular.module('walletApp.directives', [])	

	.directive('appMainmenu', function () {
		return {
			restrict: 'A',
			controller: 'mainmenuCtrl',
			templateUrl: '/assets/partials/directive-mainmenu.html'
		}			
	})

	.directive('appWallet', function () {
		return {
			restrict: 'A',
			controller: 'walletCtrl',
			templateUrl: '/assets/partials/directive-wallet.html'
		}
	}) 
;