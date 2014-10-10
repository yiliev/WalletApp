angular.module('walletApp.controllers', ['ngRoute'])

	.controller('walletAppCtrl', ['$scope', 'eventManager', function($scope, eventManager) {

	}])

	.controller('mainmenuCtrl', ['$scope', 'eventManager', function($scope, eventManager) {

		$scope.resetWallet = function () {
			eventManager.broadcastItem('resetWallet');
		};


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

	.controller('walletCtrl', ['$scope', 'eventManager', function ($scope, eventManager) {

		$scope.resetWallet = function () {
			$scope.walletItems = [];
			localStorage["walletItems"] = [];			
			$scope.recalcTotal();
		};

		$scope.recalcTotal = function () {
			var sign = 1;
			for (var i=0; i<$scope.walletItems.length; i++) {
				sign = $scope.walletItems[i].action == "add" ? 1 : -1 ;
				$scope.walletTotal += sign * $scope.walletItems[i].value;
			}
		};

		$scope.pushInWalletItems = function (action) {			
			$scope.walletItems.push({
				"date": Date(),
				"action": action,
				"value": $scope.submitItemValue 
			});
			localStorage.setItem("walletItems", JSON.stringify($scope.walletItems));

			$scope.submitItemValue = '';
			$scope.recalcTotal();
		};

		$scope.validateInput = function () {
			var val = $scope.submitItemValue;		

			if (val >=0 && !isNaN(val) && val !== '') { 
				return true;
			}			

			return false;	
		};

		$scope.submit = function (action) {
			if ($scope.validateInput()) {
				if (action == "remove"){
					if ($scope.submitItemValue <= $scope.walletTotal) {
						$scope.pushInWalletItems(action);
					}
					else {
						console.log('action not possible');
					}
				}
				else {
					$scope.pushInWalletItems(action);
				}
			}			
		};
  	
	    $scope.$on('resetWallet', function() {
	        $scope.resetWallet();
	    });

		// Init
		if (localStorage["walletItems"] != undefined && localStorage["walletItems"].lenght) {
			$scope.walletItems = JSON.parse(localStorage.getItem("walletItems"));
		}
		else {
			$scope.resetWallet();
		}	
 

		if ($scope.walletItems.length) {
			$scope.walletTotal = 0;
			$scope.recalcTotal();
		}
		else {
			console.log('no items');
		}

	}])

	; 