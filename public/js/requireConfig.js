/**
 * Created by leedaniel on 15. 1. 18..
 */

require.config({
    'baseUrl' : 'js',

    'paths' : {
        'jquery' : '../../bower_components/jquery/dist/jquery',
        'async' : '../../bower_components/async/lib/async',
        'angular' : '../../bower_components/angular/angular',
        'angular-route' : '../../bower_components/angular-route/angular-route',
        'angularAMD' : '../../bower_components/angularAMD/angularAMD',
        'bootstrap' : '../../bower_components/bootstrap/dist/js/bootstrap'

    },

    'shim' : {
        'angular-route' : ['angular'],
        'angularAMD' : ['angular'],
        'bootstrap' : {
            'exports' : 'bootstrap',
            'deps' : ['css!../../bower_components/bootstrap/dist/css/bootstrap',
                'css!../../bower_components/bootstrap/dist/css/bootstrap-theme']
        }

    },

    'map' : {
        '*' : {
            'css' : '../../bower_components/require-css/css',
            'Controller' : '../controllers',
            'Service' : '../services',
            'Filter' : '../filters',
            'Directive' : '../directives'
        }
    },

    'deps' : ['app']

});
