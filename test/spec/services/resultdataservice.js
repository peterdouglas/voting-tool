'use strict';

describe('Service: ResultDataService', function () {

  // load the service's module
  beforeEach(module('votingTool'));

  // instantiate service
  var ResultDataService;
  beforeEach(inject(function (_ResultDataService_) {
    ResultDataService = _ResultDataService_;
  }));

  it('should do something', function () {
    expect(!!ResultDataService).toBe(true);
  });

});
