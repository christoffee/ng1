'use strict';

/**
 * @ngdoc function
 * @name ng1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ng1App
 */
angular.module('ng1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
