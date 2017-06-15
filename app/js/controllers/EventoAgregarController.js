'use strict';

angular.module('catchaiApp.EventoAgregarController', ['ngRoute'])

.controller('EventoAgregarController', ['$scope', '$routeParams',

  function($scope, $routeParams){
    console.log("EventoAgregarController.js");  

	$scope.init = function(){
		console.log("EventoAgregarController.js: init();");
	};

  }

]);