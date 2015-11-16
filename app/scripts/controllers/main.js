'use strict';

/**
 * @ngdoc function
 * @name ng1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ng1App
 */
angular.module('ng1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
