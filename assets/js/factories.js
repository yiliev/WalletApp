angular.module('walletApp.factories', [])	

	.factory('eventManager', function($rootScope) {

	    var eventManager = {};

	    eventManager.broadcastItem = function(event) {
	        $rootScope.$broadcast(event);
	    };

	    return eventManager;
	    
	})

	;