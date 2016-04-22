angular.module('app', ['ui.router']).controller('AppController', function($scope, $http) {
}).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        })
        .state('core', {
            url: '/core',
            templateUrl: 'templates/core.html'
        })
        .state('elective', {
            url: '/elective',
            templateUrl: 'templates/elective.html'
        })
        .state('financial', {
          url: 'core/financial',
          templateUrl: 'templates/core/financial.html'
        });

});
