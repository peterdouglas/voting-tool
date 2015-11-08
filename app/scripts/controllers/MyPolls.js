'use strict';

/**
 * @ngdoc function
 * @name votingTool.controller:MyPollsCtrl
 * @description
 * # MyPollsCtrl
 * Controller of the votingTool
 */
angular.module('votingTool')
  .controller('MyPollsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
