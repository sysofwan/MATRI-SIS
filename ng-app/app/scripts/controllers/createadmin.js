'use strict';

/**
 * @ngdoc function
 * @name matriSisApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the matriSisApp
 */
angular.module('matriSisApp')
  .controller('CreateAdminCtrl', function ($scope, User, $location) {
    var user = $scope.user = new User();

    $scope.createUser = function() {
      user.$save(function() {
        $location.url('/admin/list');
      });
    };
  });
