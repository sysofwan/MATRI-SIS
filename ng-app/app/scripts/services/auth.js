'use strict';

/**
 * @ngdoc service
 * @name matriSisApp.auth
 * @description
 * # auth
 * Factory in the matriSisApp.
 */
angular.module('matriSisApp')
  .factory('auth', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
