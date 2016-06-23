angular.module('app.controller',[])
    .controller('allCtrl',function($http,$scope,$rootScope,$state,$location){
        $http.get(config.localUrl+'customer.json').then(function(rtn){
            $rootScope.currentPage=rtn.data.pages.filter(function(page){
            return page.pageName == $location.path();
            });
            $rootScope.currentPage= $rootScope.currentPage[0];
            console.log('current page is:',$location.path(),'current page Data is ');
            console.log($rootScope);
            root = $rootScope;
        });
    });
var root;
//后期换本地存储,localstorage



