'use strict';

/**
 * @ngdoc function
 * @name matriSisApp.controller:RecorduploadCtrl
 * @description
 * # RecorduploadCtrl
 * Controller of the matriSisApp
 */
angular.module('matriSisApp')
  .controller('RecordUploadCtrl', function($scope, billingRecordsParser) {

    $scope.payments = [];
    var records;

    $scope.onFileSelect = function(files) {
      var file = files[0];
      records = billingRecordsParser(file);
      records.getData().then(function(data) {
        $scope.payments = data;
      });
    };

  });