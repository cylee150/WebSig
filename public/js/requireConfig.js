/**
 * Created by leedaniel on 15. 1. 18..
 */

requirejs.config({
    'baseUrl' : 'js',

    'paths' : {
        'jquery' : '../../bower_components/jquery/dist/jquery',
        'async' : '../../bower_components/async/lib/async',
        'angular' : '../../bower_components/angular/angular',
        'angular-route' : '../../bower_components/angular-route/angular-route',
        'angularAMD' : '../../bower_components/angularAMD/angularAMD'

    },

    'shim' : {
        'angular-route' : ['angular'],
        'angularAMD' : ['angular']

    },

    'map' : {
        '*' : {
            'Controller' : '../controllers',
            'Service' : '../services',
            'Filter' : '../filters',
            'Directive' : '../directives'
        }
    },

    'deps' : ['app']

});
