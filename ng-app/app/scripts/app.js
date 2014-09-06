'use strict';

/**
 * @ngdoc overview
 * @name matriSisApp
 * @description
 * # matriSisApp
 *
 * Main module of the application.
 */
angular
  .module('matriSisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.validate',
    'sysofwan.httpWrapper',
    'angularFileUpload'
  ])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/admin/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      requireLogin: true
    })
    .when('/admin/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .when('/admin/create', {
      templateUrl: 'views/createadmin.html',
      controller: 'CreateAdminCtrl',
      requireLogin: true
    })
    .when('/admin', {
      templateUrl: 'views/admin.html',
      controller: 'AdminCtrl',
      requireLogin: true
    })
    .when('/admin/list', {
      templateUrl: 'views/adminlist.html',
      controller: 'AdminListCtrl'
    })
    .when('/admin/upload', {
      templateUrl: 'views/recordupload.html',
      controller: 'RecordUploadCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.config(function($httpProvider) {
  $httpProvider.interceptors.push(function($browser) {
    return {
      request: function(config) {
        /* jshint -W106 */
        config.headers.access_token = $browser.cookies().access_token;
        /* jshint +W106 */
        return config;
      }
    };
  });
})

.constant('_', window._)

.constant('Papa', window.Papa)

.run(function($rootScope, session, $location) {
  $rootScope.$on('$routeChangeStart', function(event, next) {
    if (next.requireLogin && !session.isLoggedIn()) {
      $location.path('/admin/login').search('redirectTo', next.originalPath);
      event.preventDefault();
    }
  });
});