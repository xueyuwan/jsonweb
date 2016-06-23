angular.module('app.route', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index',{
                url:'/index',
                templateUrl:'app.html',
              controller:'allCtrl'
        }).state('about', {
                url: '/about',
                controller:"allCtrl"
            }).state('contact',{
            url:"/contact",
            controller:"allCtrl"
        });
        $urlRouterProvider.otherwise("/index");
    });