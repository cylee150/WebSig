/**
 * Created by leedaniel on 15. 1. 18..
 */


define(['app'], function (app) {
    app.factory('getUser', function () {
        return function (callback) {
            var users = [
                {
                    name : 'Lee',
                    age : 26
                },
                {
                    name : 'Daniel',
                    age : 26
                }
            ];
            //통신 같은거 넣는거 때문에 사용함. 통신이 성공하면 함수를 실행해라.
            callback(users);
        }

    });

})