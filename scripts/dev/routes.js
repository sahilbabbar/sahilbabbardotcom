(function() {
    'use strict';
    var app = angular.module('meApp').config(function($stateProvider, $urlRouterProvider) {
        var homeState = {
            name: 'home',
            url: '/',
            templateUrl: 'views/index.html'
        };
        var profileState = {
            name: 'profile',
            url: '/profile',
            templateUrl: 'views/profile.html'
        };
        var projectsState = {
            name: 'projects',
            url: '/projects',
            templateUrl: 'views/projects.html'
        };
        $stateProvider.state(homeState);
        $stateProvider.state(profileState);
        $stateProvider.state(projectsState);
        $urlRouterProvider.otherwise('/');
    });
})();
