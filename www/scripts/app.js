'use strict';

// Declare app level module which depends on filters, and services
angular.module('conanWebApp', [
	'myApp.config', 
	'myApp.routes', 
	'myApp.filters', 
	'myApp.services', 
	'myApp.directives', 
	'myApp.controllers',
	'waitForAuth', 
	'routeSecurity'
	'ngCookies',
  	'ngResource',
  	'ngSanitize',
  	'ngRoute',
  	'ionic',
  	'firebase'
])


   .run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
      if( FBURL === 'https://burning-fire-5629.firebaseio.com' ) {
         // double-check that the app has been configured
         angular.element(document.body).html('<h1>Please configure app/js/config.js before running!</h1>');
         setTimeout(function() {
            angular.element(document.body).removeClass('hide');
         }, 250);
      }
      else {
         // establish authentication
         $rootScope.auth = loginService.init('/');
         $rootScope.FBURL = FBURL;
      }
   }]);

