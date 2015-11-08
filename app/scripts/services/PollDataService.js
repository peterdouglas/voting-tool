'use strict';

/**
 * @ngdoc service
 * @name votingTool.PollDataService
 * @description
 * # PollDataService
 * Factory in the votingTool.
 */
angular.module('votingTool')
  .factory('PollDataService', function (Ref) {
    // Service logic
    var pollRef = Ref.child('polls');
    var authDetails = Ref.getAuth().uid;

    var resultCallback = function(error) {
      console.log(error);
      if (error) {
        return {'status': 'error',
                'error': error};
      } else {

        return {'status': 'success',
                'id': pollRef.key()
                };
      }
    };

    // Public API here
    return {
      create: function (name, options) {

        pollRef.push().set({
          'name': name,
          'options': options,
          'uid': authDetails
        }, resultCallback).then(function(thing) {
          console.log(thing);
        });

      },

      update: function (pollId, name, options) {
        pollRef.child(pollId).update({
          'name': name,
          'options': options
        }, resultCallback);
      },

      delete: function (pollId) {
        pollRef.child(pollId).remove(resultCallback);

      }

    };
  });
