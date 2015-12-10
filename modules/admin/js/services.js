angular.module('qcProduct.admin.services', []).factory('userService',['USER_API','$http','$cookieStore',function(USER_API,$http,$cookieStore){
    var user={};
    return{
        alluser:function(){
         return users={[
            {
                "user_id":1,
                "email":'pankaj.goyal@shopclues.com',
                "name":'Pankaj Goyal',
                "company":'shopclues',
                "status":'A',
                "department":'catalog'
            },
            {
                "user_id":2,
                "email":'pankaj.goyal2@shopclues.com',
                "name":'Pankaj Goyal',
                "company":'shopclues',
                "status":'A',
                "department":'catalog'
            } ,
            {
                "user_id":3,
                "email":'pankaj.goyal3@shopclues.com',
                "name":'Pankaj Goyal',
                "company":'shopclues',
                "status":'A',
                "department":'catalog'
            }
        ]};
    }
    // user.create=function(userdata){
    //     var req = {
    //         method: 'POST',
    //         url: USER_API,
    //         headers: {
    //             'Content-Type':'application/json',
    //             'Authorization':'d12121c70dda5edfgd1df6633fdb36c0'
    //         },
    //         data: { 
    //             "email":
    //             "password":password
    //         }
    //     }
    //     return $http(req).then(function(response,status){
    //         auth.user=response.data;
    //         $cookieStore.put('user',auth.user);
    //         return auth.user;
    //     });
    // }

    // auth.logout=function(){
    //     return $http.post(LOGOUT_ENDPOINT).then(function(response){
    //         auth.user=undefined;
    //         $cookieStore.remove('user');
    //     });
    // }

    // return auth;

}]);

angular.module('qcProduct.admin.services').value('USER_API','http://spBlogger-sitepointdemos.rhcloud.com/api/posts/:id'); // This is our end point
// angular.module('qcProduct.admin.services').value('','http://localhost/cic-611/api/login');
// angular.module('qcProduct.admin.services').value('LOGOUT_ENDPOINT','http://spBlogger-sitepointdemos.rhcloud.com/logout');
