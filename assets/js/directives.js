angular.module('walletApp.directives', [])	

	.directive('appMainmenu', function (eventManager) {
		return {
			restrict: 'A',
			controller: 'mainmenuCtrl',
			templateUrl: '/assets/partials/directive-mainmenu.html'
		}			
	})

	.directive('appWallet', function (eventManager) {
		return {
			restrict: 'A',
			controller: 'walletCtrl',
			templateUrl: '/assets/partials/directive-wallet.html'
		}
	}) 
;