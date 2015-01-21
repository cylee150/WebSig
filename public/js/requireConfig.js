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
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'angular-aria': '../../bower_components/angular-aria/angular-aria',
        'angular-material': '../../bower_components/angular-material/angular-material',
        'angular-resource': '../../bower_components/angular-resource/angular-resource',
        'hammer': '../../bower_components/hammerjs/hammer',
        'bootstrap' : '../../bower_components/bootstrap/dist/js/bootstrap'

    },

    'shim' : {
        'angular' : {
            'exports' : 'angular'
        },
        'angular-route' : ['angular'],
        'angularAMD' : ['angular'],
        'angular-animate': ['angular'],
        'angular-aria': ['angular'],
        'angular-resource': ['angular'],
        'angular-route': ['angular'],
        'angular-material': [
            'angular-animate',
            'angular-aria',
            'hammer',
            'css!../../bower_components/angular-material/angular-material',
            'css!../../bower_components/angular-material/theme/light-blue-dark-theme'
        ],
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
