'use strict';

/**
 * @ngdoc service
 * @name matriSisApp.billingRecordsParser
 * @description
 * # billingRecordsParser
 * Factory in the matriSisApp.
 */
angular.module('matriSisApp')
  .factory('billingRecordsParser', function(Papa, _, $q) {
    return function(file) {

      var keyMap = {
        Nama: 'name',
        'No. KP': 'nric',
        'No. Bill': 'billId',
        Tarikh: 'date',
        Yuran: 'fee',
        Bayaran: 'paymentAmount'
      };

      var deferred = $q.defer();

      var processData = function(dataArr) {
        return _.map(dataArr, function(data) {
          var obj = {};
          _.each(data, function(value, key) {
            obj[keyMap[key]] = value;
          });
          return obj;
        });
      };

      Papa.parse(file, {
        worker: true,
        header: true,
        complete: function(results) {
          console.log(results);
          if (results.errors.length) {
            deferred.reject(results.errors);
          } else {
            deferred.resolve(processData(results.data));
          }
        }
      });


      return {
        getData: function() {
          return deferred.promise;
        }
      };
    };
  });