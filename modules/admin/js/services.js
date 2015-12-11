angular.module('qcProduct.admin.services', []).factory('userService',['USER_API','$http','$cookieStore',function(USER_API,$http,$cookieStore){
    var user={};
    
    user.allusers=function(){

        // var  url= PROXY_POINT+"?url="+USER_API;
        // var data = $.param({
        //         user: username,
        //         password:password
        //     });
        // var config = {
        //         headers : {
        //             'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        //         }
        // };

        // return $http.get(url,config).then(function(response,status){
        //     user.allusers=response.data;
        //     $cookieStore.put('alluser',auth.user);
        //     return auth.user;
        // });

         return users=[
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
                "email":'pankaj.2@shopclues.com',
                "name":'Pankaj Goyal',
                "company":'shopclues',
                "status":'A',
                "department":'catalog'
            } ,
            {
                "user_id":3,
                "email":'pankaj.3@shopclues.com',
                "name":'Pankaj Goyal',
                "company":'shopclues',
                "status":'A',
                "department":'catalog'
            }
        ];
    }
    user.getUserById=function(user_id){
        return singleUser={
                "user_id":1,
                "email":'pankaj.goyal2@shopclues.com',
                "name":'Pankaj Goyal',
                "company":'shopclues',
                "status":'A',
                "department":'catalog'
            };
    }

    return user;

}]);

angular.module('qcProduct.admin.services').value('USER_API','http://spBlogger-sitepointdemos.rhcloud.com/api/posts/:id'); // 
