'use strict';

/**
 * @ngdoc function
 * @name matriSisApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the matriSisApp
 */
angular.module('matriSisApp')
  .controller('SignupCtrl', function ($scope, User) {
    var user = $scope.user = new User();

    $scope.createUser = function() {
      user.$save();
    };
  });
