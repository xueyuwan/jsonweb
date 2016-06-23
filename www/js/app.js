var config = {
    localUrl : "data/",
    serverUrl:"",
    $http:undefined
};


angular.module('app', ['ionic'])

    .config(['$ionicConfigProvider', function($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom'); // other values: top
    }])
    .run(function($ionicPlatform, $http,$rootScope) {
        //初始化页面参数
        $http.get(config.localUrl+'default.json').then(function(rtn){
           $rootScope.default = rtn.data;
        });
        $http.get(config.localUrl+'customer.json').then(function(rtn){
            $rootScope.customer = rtn.data;
        });
        $http.get(config.localUrl+'article.json').then(function(rtn){
            $rootScope.article = rtn.data;
        });
        $http.get(config.localUrl+'image.json').then(function(rtn){
            $rootScope.image = rtn.data;
        });

        config.$http= $http;


        var url = "";
        if (ionic.Platform.isAndroid()) {
            url = "/android_asset/www/";
        }
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
    });

//调试服务器的数据
var logData = function(){
    //初始化页面参数
    config.$http.get(config.localUrl+'default.json').then(function(rtn){
        console.group("default setting");
        console.dir(rtn.data);
        console.groupEnd();
    });
    config.$http.get(config.localUrl+'customer.json').then(function(rtn){
        console.group("customer setting");
        console.dir(rtn.data);
        console.groupEnd();
    });
    config.$http.get(config.localUrl+'article.json').then(function(rtn){
        console.group("article setting");
        console.dir(rtn.data);
        console.groupEnd();
    });
    config.$http.get(config.localUrl+'image.json').then(function(rtn){
        console.group("image setting");
        console.dir(rtn.data);
        console.groupEnd();

    });

}