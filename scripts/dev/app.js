(function() {
    'use strict';
    var app = angular.module('meApp', ['ngMaterial', 'ui.router']);
    app.config(function($mdThemingProvider) {
        $mdThemingProvider.enableBrowserColor({
            theme: 'default',
            palette: 'primary',
            hue: '800'
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('light-blue');
    });
})();
