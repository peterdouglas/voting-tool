'use strict';

describe('Controller: EditPollCtrl', function () {

  // load the controller's module
  beforeEach(module('votingTool'));

  var EditpollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditpollCtrl = $controller('EditpollCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
