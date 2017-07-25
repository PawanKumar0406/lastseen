commercialApp.controller('loginController',['$scope','appFactory', function($scope, appFactory){
    $scope.login = function(){
        appFactory.login({username : $scope.username, password : $scope.password})
    };
}]);