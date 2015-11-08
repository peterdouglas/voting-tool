'use strict';

describe('Service: PollDataService', function () {

  // load the service's module
  beforeEach(module('votingTool'));

  // instantiate service
  var PollDataService;
  beforeEach(inject(function (_PollDataService_) {
    PollDataService = _PollDataService_;
  }));

  it('should do something', function () {
    expect(!!PollDataService).toBe(true);
  });

});
