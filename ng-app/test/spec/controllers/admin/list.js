'use strict';

describe('Controller: AdminListCtrl', function () {

  // load the controller's module
  beforeEach(module('matriSisApp'));

  var AdminListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminListCtrl = $controller('AdminListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
