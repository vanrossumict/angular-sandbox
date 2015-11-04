angular.module('sandbox', ['ngRoute'])

  .controller('MainController', function($scope) {
    $scope.stuff = 'lasdkfjlkasdjfklasf';
  })

  .config(function($routeProvider) {
    $routeProvider.when('/', {
      template: '<h1>This is the homepage</h1>'
    })
  })
;
