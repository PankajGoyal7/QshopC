'use strict'

angular.module('qcProduct.admin.controllers',[]).controller('CategoryReportController',['$scope','$state',function($scope,$state){
    

}]).controller('AgentReportController',['$scope','$state',function($scope,$state){
    

}]).controller('DailyReportController',['$scope','$state',function($scope,$state){
    

}]).controller('UsersController',['$scope','$state','userService',function($scope,$state,userService){
    
    $scope.buttonLink="Edit";
    $scope.users=userService.allusers();
    // console.log($scope.users);
    // $scope.user={};
    // $scope.user.email=$scope.users[0].email;
    // $scope.user.company=$scope.users[0].company;
    // $scope.user.status=$scope.users[0].status;
    // $scope.user.department=$scope.users[0].department;
    // $scope.user.name=$scope.users[0].name;
    // $scope.buttonText="Update";
    // $scope.edit=function(user){
    //     var current_user=angular.fromJson(user);
    //     console.log(current_user);
    //     $scope.user.email=current_user.email;
    //     console.log("223"+$scope.user.email);

    // }

    // $scope.userdata={};
    // $scope.userdata.email=user.username;
    // $scope.userdata.name=user.name;
    // $scope.userdata.password=user.password;
    // $scope.userdata.status=user.status;
    // $scope.userdata.dept=user.dept;

    // $scope.addUser=function(){
    // 	userService.create($scope.userdata);
    // };

}]).controller('TatSettingController',['$scope','$state',function($scope,$state){
    

}]).controller('PushProductsController',['$scope','$state',function($scope,$state){
    

}]).controller('AutoAssignController',['$scope','$state',function($scope,$state){

}]).controller('UpdateUserController',['$scope','$state','$stateParams','userService',function($scope,$state,$stateParams,userService){

    $scope.userData=userService.getUserById($stateParams.id);
    console.log($stateParams.id);
    $scope.user={};
    $scope.user.email=$scope.userData.email;
    $scope.user.company=$scope.userData.company;
    $scope.user.status=$scope.userData.status;
    $scope.user.department=$scope.userData.department;
    $scope.user.name=$scope.userData.name;
    $scope.buttonText="Update";

}]).controller('NewUserController',['$scope','$state',function($scope,$state){
    $scope.buttonText="Create";
}]);




