(function() {
    'use strict';
    var app = angular.module('meApp');
    app.directive('header', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/directives/header.html'
        };
    });
    app.directive('footer', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/directives/footer.html'
        };
    });
})();
