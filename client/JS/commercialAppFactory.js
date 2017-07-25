commercialApp.factory('appFactory', function($http){
    var factory = {};

    factory.login = function(obj){
        
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        var data = j$.param({
            username: obj.username,
            password: obj.password
        });    

        $http.post('/login', data, config)
        .success(function (data, status, headers, config) {
            alert(data);
        })
        .error(function (data, status, header, config) {
            
        });
       
    }

    return factory;
});