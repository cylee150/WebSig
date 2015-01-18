/**
 * Created by leedaniel on 15. 1. 18..
 */

// 이걸 해야지만 require로 async하게 가능

define([
    'angularAMD',
    'angular-route'
], function (angularAMD) {
    // 자바에서 패키지 같은 느낌
    var app = angular.module('WebSig', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/home', angularAMD.route({
                templateUrl : 'views/home.html',    // 뷰부분 주소
                controller : 'homeCtrl',        //
                controllerUrl : 'Controller/homeCtrl'   // 동적으로 로드할 수 있게 하기 위한 주소
            }))
            .when('/profile', angularAMD.route({
                templateUrl : 'views/profile.html',
                controller : 'profileCtrl',
                controllerUrl : 'Controller/profileCtrl'
            }))

            .otherwise('/home');
    });

    return angularAMD.bootstrap(app);

});