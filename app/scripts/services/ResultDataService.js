'use strict';

/**
 * @ngdoc service
 * @name votingTool.ResultDataService
 * @description
 * # ResultDataService
 * Factory in the votingTool.
 */
angular.module('votingTool')
  .factory('ResultDataService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
