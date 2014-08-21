'use strict';

/**
 * @ngdoc service
 * @name matriSisApp.User
 * @description
 * # User
 * Factory in the matriSisApp.
 */
angular.module('matriSisApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id', {id: '@id'});
  });
