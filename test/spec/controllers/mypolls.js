'use strict';

describe('Controller: MypollsCtrl', function () {

  // load the controller's module
  beforeEach(module('votingTool'));

  var MypollsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MypollsCtrl = $controller('MypollsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
