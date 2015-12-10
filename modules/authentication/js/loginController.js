// (function () {
//     'use strict';
 
//     angular.module('qcProduct').controller('LoginController',['$location', 'AuthenticationService',
//                 function LoginController($location, AuthenticationService, FlashService) {
//         var vm = this;

//         vm.login = login;

//         (function initController() {
//             // reset login status
//             AuthenticationService.ClearCredentials();
//         })();
 
//         function login() {
//             vm.dataLoading = true;
//             AuthenticationService.Login(vm.username, vm.password, function (response) {
//                 if (response.success) {
//                     AuthenticationService.SetCredentials(vm.username, vm.password);
//                     $location.path('/admin-home');
//                 } else {
//                     FlashService.Error(response.message);
//                     vm.dataLoading = false;
//                 }
//             });
//         };
// }]);
// })();

angular.module('qcProduct').controller('LoginController',['$scope','authenticationService','$state',function($scope,authenticationService,$state){
    $scope.buttonText="Login";
    $scope.login=function(){
        $scope.buttonText="Logging in. . .";
        authenticationService.login($scope.credentials.username,$scope.
        credentials.password).then(function(data){
        $state.go('admin.postViewAll');
    },function(err){
        $scope.invalidLogin=true;
    }).finally(function(){
        $scope.buttonText="Login";
    });
    }
}]);
angular.module('spBlogger.admin.controllers').controller('AdminController',['$scope','authService','$state','user',function($scope,authService,$state,user){
$scope.logout=function(){
authService.logout().then(function(){
$state.go('login');
});
}
}]);


$stateProvider.state('admin',{
url:'/admin',
abstract:true,
controller:'AdminController',
templateUrl:'modules/admin/views/admin-home.html'
});