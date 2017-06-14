'use strict';

angular.module('catchaiApp.UnoController', ['ngRoute'])

.controller('UnoController', ['$scope', '$routeParams',

  function($scope, $routeParams){
    console.log("UnoController.js");  

	$scope.init = function(){
		console.log("UnoController.js: init();");
	};

  }

]);