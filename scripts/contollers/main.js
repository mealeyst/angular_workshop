'use strict';

angular.module('mytodoApp', [])
  .controller('TodoCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
  });