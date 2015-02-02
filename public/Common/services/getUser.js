/**
 * Created by leedaniel on 15. 1. 18..
 */

// factory 와 service의 차이
// 팩토리는 뉴 된게 들어오고 서비스는 그냥 그 함수 자체를 씀

define(['app'], function (app) {
    app.factory('getUser', function () {
        return function (callback) {
            var users = [
                {
                    name : 'Lee',
                    age : 25
                },
                {
                    name : 'Daniel',
                    age : 26
                }
            ];
            //통신 같은거 넣는거 때문에 사용함. 통신이 성공하면 함수를 실행해라.
            callback(users);
        };

    });

})