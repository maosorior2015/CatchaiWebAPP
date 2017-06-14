'use strict';

// Declare app level module which depends on views, and components
angular.module('catchaiApp', [
  'ngRoute',
  'constantes',
  'catchaiApp.IndexController',
  'catchaiApp.UnoController',
  'catchaiApp.DosController',
  'catchaiApp.MenuController',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  console.log("app.js: config");
  $locationProvider.html5Mode(true).hashPrefix('!')

  $routeProvider.when('/uno', {
    templateUrl: 'views/unoView.html',
    controller: 'UnoController'
  }).when('/dos', {
    templateUrl: 'views/dosView.html',
    controller: 'DosController'
  }).when('/index', {
    templateUrl: 'views/indexView.html',
    controller: 'IndexController'
  }).otherwise({redirectTo: '/index'});

}]).run(function($rootScope,ENV){

  console.log("app.js: run");
  console.log(ENV);

});