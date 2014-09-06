'use strict';

describe('Service: billingRecordsParser', function () {

  // load the service's module
  beforeEach(module('matriSisApp'));

  // instantiate service
  var billingRecordsParser;
  beforeEach(inject(function (_billingRecordsParser_) {
    billingRecordsParser = _billingRecordsParser_;
  }));

  it('should do something', function () {
    expect(!!billingRecordsParser).toBe(true);
  });

});
