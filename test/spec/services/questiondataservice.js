'use strict';

describe('Service: QuestionDataService', function () {

  // load the service's module
  beforeEach(module('votingTool'));

  // instantiate service
  var QuestionDataService;
  beforeEach(inject(function (_QuestionDataService_) {
    QuestionDataService = _QuestionDataService_;
  }));

  it('should do something', function () {
    expect(!!QuestionDataService).toBe(true);
  });

});
