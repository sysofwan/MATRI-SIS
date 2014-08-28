'use strict';

/**
 * @ngdoc function
 * @name matriSisApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the matriSisApp
 */
angular.module('matriSisApp')
  .controller('LoginCtrl', function ($scope, $location, session, $routeParams) {
    
    $scope.login = function() {
      session.login($scope.email, $scope.password)
        .then(function() {
          $location.url($routeParams.redirectTo || '/admin');
        }, function(req) {
          $scope.errorMessage = req.data.message;
        });
    };
  });
