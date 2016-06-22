// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic'])
    .run(function( $http) {
    $http.get('data/default.json').then(function(rtn){
        console.log(rtn.data);
    });

    });