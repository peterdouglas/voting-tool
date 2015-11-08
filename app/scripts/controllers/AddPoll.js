'use strict';

/**
 * @ngdoc function
 * @name votingTool.controller:AddPollCtrl
 * @description
 * # AddPollCtrl
 * Controller of the votingTool
 */
angular.module('votingTool')
  .controller('AddPollCtrl', function (PollDataService) {
    var vm = this;

    vm.pollPlaceholders = {'name': 'What is your favourite thing to do on the weekend?',
                         'options': ['Make things', 'Watch movies']};

    vm.addOption = function() {
      vm.pollPlaceholders.options.push('New Option');
    };

    vm.addPoll = function(newPoll) {
      console.log(newPoll);
      var result = PollDataService.create(newPoll.name, newPoll.options);
      console.log(result);
      /*if (result.status === 'success') {
        console.log(result.id);

      } else {
        console.log(result.error);
      }*/
    };


  });
