/**
 * Created by leedaniel on 15. 1. 18..
 */
//실행해서 리턴값을 매개변수로 넘겨준다.
define(['app', 'Service/getUser'], function (app) {
    app.controller('profileCtrl', function ($scope, getUser) {
        getUser(function (users) {
            $scope.users = users;
        });
    });
});