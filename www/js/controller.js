angular.module('app.controller',[])
    .controller('indexCtrl',function($http,$scope,$rootScope){
        $http.get(config.localUrl+'customer.json').then(function(rtn){

            var components = $rootScope.customer.components=rtn.data.components;
            for(var component in components){
            console.log(components);
                    $scope[component.pageName] =component;

            }
            console.log($scope);
        });
    });
//后期换本地存储,localstorage



