'use strict'

angular.module('qcProduct.auth',['qcProduct.auth.controllers','qcProduct.auth.services','qcProduct.admin.controllers']);

angular.module('qcProduct.auth').config(['$stateProvider',function($stateProvider){
    $stateProvider.state('login',{
        url:'/login',
        controller: 'LoginController',
        resolve:{
            user:['authService','$q',function(authService,$q){
                if(authService.user){
                    return $q.reject({authorized:true});
                }
            }]
        },
        templateUrl:'modules/auth/views/login.html'
    }).state('admin',{
        url:'/admin',
        abstract:true,
        controller:'AdminController',
        resolve:{
            user:['authService','$q',function(authService,$q){
                return authService.user || $q.reject({unAuthorized:true});
            }]
        },
        templateUrl:'modules/admin/views/admin-home.html'
    }).state('admin.postNew',{
        url:'/posts/new',
        controller: '',
        templateUrl:'modules/agent/views/agent-home.html'
    }).state('admin.postUpdate',{
        url:'/posts/:id/edit',
        controller: 'PostUpdateController',
        templateUrl:'modules/admin/views/admin-update-post.html'
    }).state('admin.postViewAll',{
        url:'',
        controller: 'PostListController',
        templateUrl:'modules/admin/views/admin-cid-report.html'

    }).state('admin.cidReport',{
        url:'/admin/categoryReport',
        controller: 'CategoryReportController',
        templateUrl:'modules/admin/views/admin-cid-report.html'

    }).state('admin.agentReport',{
        url:'/admin/agentReport',
        controller: 'AgentReportController',
        templateUrl:'modules/admin/views/agent-report.html'

    }).state('admin.dailyReport',{
        url:'/admin/dailyReport',
        controller: 'DailyReportController',
        templateUrl:'modules/admin/views/daily-report.html'

    }).state('admin.users',{
        url:'/users',
        controller: 'UsersController',
        templateUrl:'modules/admin/views/all-users.html'

    }).state('admin.tatSetting',{
        url:'/tatSetting',
        controller: 'TatSettingController',
        templateUrl:'modules/admin/views/tat-setting.html'

    }).state('admin.pushProducts',{
        url:'/pushProducts',
        controller: 'PushProductsController',
        templateUrl:'modules/admin/views/push-product.html'

    }).state('admin.autoAssign',{
        url:'/autoAssign',
        controller: 'AutoAssignController',
        templateUrl:'modules/admin/views/auto-assign.html'

    }).state('admin.updateuser',{
        url:'/user/:id/edit',
        controller: 'UsersController',
        templateUrl:'modules/admin/views/user.html'

    })
}]).run(['$rootScope','$state','$cookieStore','authService',function($rootScope,$state,$cookieStore,authService){

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

        if(error.unAuthorized) {
            $state.go('login');
        }
        else if(error.authorized){  
            $state.go('admin.postViewAll');
        }
    });

    authService.user=$cookieStore.get('user');

}]);