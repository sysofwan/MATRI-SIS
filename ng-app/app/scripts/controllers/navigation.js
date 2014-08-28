'use strict';

/**
 * @ngdoc function
 * @name matriSisApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the matriSisApp
 */
angular.module('matriSisApp')
  .controller('NavigationCtrl', function ($scope, session, $location) {
    
    $scope.logout = function() {
      session.logout().then(function() {
        $location.url('/');
      });
    }; 
  });
