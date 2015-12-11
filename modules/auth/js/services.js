'use strict'

angular.module('qcProduct.auth.services', []).factory('Post',['$resource','API_ENDPOINT',function($resource,API_ENDPOINT){
    return $resource(API_ENDPOINT, { id: '@_id' }, {
        update: {
            method: 'PUT'
        }
    });
}]).service('popupService',['$window',function($window){
    this.showPopup=function(message){
        return $window.confirm(message); //Ask the users if they really want to delete the post entry
    }
}]).factory('authService',['AUTH_ENDPOINT','LOGOUT_ENDPOINT','PROXY_POINT','$http','$cookieStore',function(AUTH_ENDPOINT,LOGOUT_ENDPOINT,PROXY_POINT,$http,$cookieStore){

    var auth={};
    auth.login=function(username,password){
        var  url= PROXY_POINT+"?url="+AUTH_ENDPOINT;
        var data = $.param({
                user: username,
                password:password
            });
        var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
        };

        return $http.post(url,data,config).then(function(response,status){
            auth.user=response.data;
            $cookieStore.put('user',auth.user);
            return auth.user;
        });
    }

    auth.logout=function(){
        return $http.post(LOGOUT_ENDPOINT).then(function(response){
            auth.user=undefined;
            $cookieStore.remove('user');
        });
    }

    return auth;

}]);


angular.module('qcProduct.auth.services').value('API_ENDPOINT','http://spBlogger-sitepointdemos.rhcloud.com/api/posts/:id'); // This is our end point
angular.module('qcProduct.auth.services').value('AUTH_ENDPOINT','http://aqa2.shopclues.com/api/login');
angular.module('qcProduct.auth.services').value('LOGOUT_ENDPOINT','http://spBlogger-sitepointdemos.rhcloud.com/logout');

