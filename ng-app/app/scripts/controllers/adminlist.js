'use strict';

/**
 * @ngdoc function
 * @name matriSisApp.controller:AdminlistCtrl
 * @description
 * # AdminlistCtrl
 * Controller of the matriSisApp
 */
angular.module('matriSisApp')
  .controller('AdminListCtrl', function ($scope, User) {
    User.get(function(users) {
      $scope.users = users.users;
    });
  });
