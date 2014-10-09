angular.module('walletApp.controllers', ['ngRoute'])

	.controller('walletAppCtrl', ['$scope', function($scope) {

	}])

	.controller('mainmenuCtrl', ['$scope', function($scope) {

		$scope.resetWallet = function () {
			console.log('reset wallet');
		}


		// Main menu show hide
		menuElm = document.querySelector('#mainmenu');
		menuDropDown = menuElm.childNodes[0];
		menuElm.addEventListener('click', function (e) {
			if (menuDropDown.className == '') {
				menuDropDown.className = 'dropdown--show';
			}
			else {
				menuDropDown.className = '';
			}
		});

	}])

	.controller('walletCtrl', ['$scope', function ($scope) {
	
	}])

	; 