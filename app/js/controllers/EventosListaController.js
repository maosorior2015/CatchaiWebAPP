'use strict';

angular.module('catchaiApp.EventosListaController', ['ngRoute'])

.controller('EventosListaController', ['$scope', '$routeParams',

  function($scope, $routeParams){
    console.log("EventosListaController.js");  

	$scope.init = function(){
		console.log("EventosListaController.js: init();");
		$scope.model.eventos = [{"idevento":1,"nombre":"Paris Joven"},{"idevento":2,"nombre":"Primavera Rocker"}];
		console.log($scope.model.eventos);
	};

  }

]);