'use strict';

angular.module('catchaiApp.IndexController', ['ngRoute'])

.controller('IndexController', ['$scope', '$routeParams',

  function($scope, $routeParams){
    console.log("IndexController.js");  

	$scope.init = function(){
		console.log("IndexController.js: init();");
	};

  }

]);