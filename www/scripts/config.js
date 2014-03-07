'use strict';

// Declare app level module which depends on filters, and services
angular.module('conanWebApp.config', [])

app.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayController'
      })
      .when('/stats', {
        templateUrl: 'views/stats.html',
        controller: 'StatsController'
      })
      .when('/sent', {
        templateUrl: 'views/sent.html',
        controller: 'SentController'
      })
      .when('/answered', {
        templateUrl: 'views/answered.html',
        controller: 'AnsweredController'
      })
      .otherwise({
        redirectTo: '/'
      });
    }])
  

   // version of this seed app is compatible with angularFire 0.6
   // see tags for other versions: https://github.com/firebase/angularFire-seed/tags
   .constant('version', '0.6')


   // where to redirect users if they need to authenticate (see module.routeSecurity)
   .constant('loginRedirectPath', '/login')


   // your Firebase URL goes here
   .constant('FBURL', 'https://burning-fire-5629.firebaseio.com')


   //you can use this one to try out a demo of the seed
//   .constant('FBURL', 'https://angularfire-seed.firebaseio.com');




/*********************
 * !!FOR E2E TESTING!!
 *
 * Must enable email/password logins and manually create
 * the test user before the e2e tests will pass
 *
 * user: test@test.com
 * pass: test123
 */