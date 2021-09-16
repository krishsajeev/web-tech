
import angular from 'angular';
var app = angular.module('SportsApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/handball', {
      templateUrl: "index.html",
      controller: "Handball"
    })
    .when('/Football', {
      templateUrl: "index.html",
      controller: "Football"
    })
    .when('/khokho', {
      templateUrl: "index.html",
      controller: "Khokho"
    })
    .when('/hockey', {
      templateUrl: "index.html",
      controller: "hockey"
    })
});

app.controller("Handball", function($scope, $route) {
  $scope.sport = {
    name: 'Handball',
    Captain: 'Shyam',
    Vicecaptain: 'Shyami',

  }
});

app.controller("Football", function($scope, $route) {
  $scope.sport = {
    name: 'Football',
    Captain: 'Shyam',
    Vicecaptain: 'Shyami',
  }
});

app.controller("khokho", function($scope, $route) {
  $scope.sport = {
    name: 'khokho',
    Captain: 'Shyam',
    Vicecaptain: 'Shyami',
  }
});

app.controller("hockey", function($scope, $route) {
  $scope.sport = {
    name: 'hockey',
    Captain: 'Shyam',
    Vicecaptain: 'Shyami',
  }
});