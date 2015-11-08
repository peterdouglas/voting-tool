'use strict';

describe('Controller: AddPollCtrl', function () {

  // load the controller's module
  beforeEach(module('votingTool'));

  var AddpollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddpollCtrl = $controller('AddpollCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
