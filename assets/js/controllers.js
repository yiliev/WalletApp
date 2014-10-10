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
			return true;
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


		// Init
		if (localStorage["walletItems"] != undefined) {
			$scope.walletItems = JSON.parse(localStorage.getItem("walletItems"));
		}
		else {
			$scope.walletItems = [];
			localStorage["walletItems"] = [];
		}	
 

		if ($scope.walletItems.length) {
			$scope.walletTotal = 0;
			debugger;
			$scope.recalcTotal();
		}
		else {
			console.log('no items');
		}




	}])

	; 