'use strict';

describe('Controller: AdminlistCtrl', function () {

  // load the controller's module
  beforeEach(module('matriSisApp'));

  var AdminlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminlistCtrl = $controller('AdminlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
