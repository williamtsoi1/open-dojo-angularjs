'use strict';

angular.module('ciandtDojos.dojos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dojos', {
    templateUrl: 'dojos/dojos.html',
    controller: 'DojosCtrl'
  });
}])

.controller('DojosCtrl', ['$scope', function($scope) {

}]);
