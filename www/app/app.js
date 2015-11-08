'use strict';

angular.module('sandbox', ['ngRoute'])

  .controller('MainController', function($scope) {
    $scope.stuff = 'lasdkfjlkasdjfklasf';
  })

  .controller('FirstController', function($scope, ApiService) {
    //$scope.name = StringUtils.booyah('Darth Vader');
    //$scope.name = booyah('Darth Vader');

    ApiService.yesorno().then(function(data) {
        $scope.yesorno = data;
      }
    );
  })

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/menu.html'
      })
      .when('/examples', {
        templateUrl: 'app/examples/examples.html'
      })
      .otherwise({
        redirectTo: '/'
      })
    ;
  })

  .service('ApiService', function ($http) {
    this.yesorno = function() {
      var payload = $http.get('http://yesno.wtf/api/');

      payload.then(function (response) {
        return response.data;
      })
      return $http.get('http://yesno.wtf/api/')
      .then(function(response) {
        return response.data;
      });
    }

    this.imdbsearch = function() {
      var payload = $http.get('http://www.omdbapi.com/?s=pulp+fiction');
    }
  })

  .factory('booyah', function () {
      return function (s) {
         return s + "... BOOOOYAAAAAAAAH!!!";
      };
  })

  .directive('add', function() {
    return {
      templateUrl: "app/directive.html",
      scope: {
        first: '=',
        second: '='
      }
    }
  })

;
