/**
 * Created by leedaniel on 15. 1. 18..
 */

define(['app'], function (app) {
    app.controller('profileCtrl', function ($scope) {
        $scope.profile = {};
        $scope.profile.name = 'Daniel_Lee'
        $scope.profile.school = 'Sogang University'
        $scope.profile.age = '26 years old'

    });
});