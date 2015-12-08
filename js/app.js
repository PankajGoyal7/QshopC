(function () {
    'use strict';
 
    angular
        .module('qcProduct', ['ngRoute','ngCookies','ui.router'])
        .run(run);
 
    // config.$inject = ['$routeProvider', '$locationProvider'];
    // function config($routeProvider, $locationProvider) {
    //     $routeProvider
    //         .when('/', {
    //             controller: '',
    //             templateUrl: 'modules/admin/views/admin-home.html',
    //             controllerAs: 'vm'
    //         })
 
    //         .when('/login', {
    //             controller: 'LoginController',
    //             templateUrl: 'modules/authentication/views/login.html',
    //             controllerAs: 'vm'
    //         })
 
    //         .when('/register', {
    //             controller: 'RegisterController',
    //             templateUrl: 'register/register.view.html',
    //             controllerAs: 'vm'
    //         })
 
    //         .otherwise({ redirectTo: '/login' });
    // }
 
    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
    angular.module('qcProduct').config(['$stateProvider',function($stateProvider){
        $stateProvider.state('login',{
            url:'/login',
            controller:'LoginController',
            controllerAs:'vm',
            templateUrl:'modules/authentication/views/login.html'
        }).state('home',{
            url:'/',
            controller:'',
            templateUrl:'modules/admin/views/admin-home.html'
        });
    }]);
 
})();
