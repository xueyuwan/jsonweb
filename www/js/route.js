angular.module('app.route', [])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('index',{
                url:'/index',
                templateUrl:'templates/inde1.html',
              controller:'indexCtrl'
    })
            .state('about', {
                url: '/about',
                templateUrl:"templates/about.html"
            });
        $urlRouterProvider.otherwise("/index");
    });