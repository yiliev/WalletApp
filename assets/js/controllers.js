angular.module('walletApp.controllers', ['ngRoute'])
 
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
			var a = $scope.walletItems;
			for (var i=0; i<a.length; i++) {
				
				$scope.walletTotal += (a[i].action == "add" ? 1 : -1) * a[i].value;
			}
			
		};

		$scope.pushInWalletItems = function (action) {			
			$scope.walletItems.push({
				"date": new Date(Date()).toISOString(),
				"action": action,
				"value": parseFloat($scope.submitItemValue)
			});
			localStorage.setItem("walletItems", JSON.stringify($scope.walletItems));

			$scope.submitItemValue = '';
			$scope.recalcTotal();
		};

		$scope.validateInput = function () {
			var val = $scope.submitItemValue;		

			if (val >0 && !isNaN(val) && val !== '') { 
				return true;
			}			

			return false;	
		};

		$scope.submit = function (action) {
			if ($scope.validateInput()) {
				if (action == "remove"){
					if (parseFloat($scope.submitItemValue) <= $scope.walletTotal) {
						$scope.pushInWalletItems(action);
					}
					else {
						alert('action not possible');
					}
				}
				else {
					$scope.pushInWalletItems(action);
				}
			}
			else {
				alert('incorrect input');
			}			
		};
	
		$scope.$on("resetWallet", function() {
			$scope.resetWallet();
		});


		// Init
		if (localStorage["walletItems"] != undefined && localStorage["walletItems"].length != 0) {
			$scope.walletItems = JSON.parse(localStorage.getItem("walletItems"));
		}
		else {
			$scope.resetWallet();
		}	
 

		$scope.walletTotal = 0;

		if ($scope.walletItems.length) {
			$scope.recalcTotal();
		}
		else {
			console.log('no items');
		}


		// currency selector
		$scope.availableCurrencies = [
			{ name:"btc", symbol: "B"},
			{ name:"jpy", symbol: "¥"},
			{ name:"usd", symbol: "$"},
			{ name:"eur", symbol: "€"},
			{ name:"gbp", symbol: "£"},
			{ name:"ils", symbol: "₪"},
			{ name:"inr", symbol: "र"},
			{ name:"krw", symbol: "₩"},
			{ name:"rub", symbol: "руб"},
			{ name:"try", symbol: "₺" }
		];



	}])

	; 