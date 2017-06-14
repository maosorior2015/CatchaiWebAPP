'use strict';

angular.module('catchaiApp.DosController', ['ngRoute'])

.controller('DosController', ['$scope', '$routeParams',

  function($scope, $routeParams){
    console.log("DosController.js");  

	$scope.init = function(){
		console.log("MenuController.js: init();");
	};

  }

]);