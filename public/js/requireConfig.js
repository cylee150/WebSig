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
            'exports' : 'angular',
            'deps' : ['jquery']
        },
        'angular-route': ['angular'],
        'angularAMD' : ['angular'],
        'angular-animate': ['angular'],
        'angular-aria': ['angular'],
        'angular-resource': ['angular'],
        'angular-material': [
            'angular-animate',
            'angular-aria',
            'hammer',
            'css!../../bower_components/angular-material/angular-material',
            'css!../../bower_components/angular-material/themes/light-blue-dark-theme'
        ],
        'hammer': {
            'exports': 'hammer'
        },
        'bootstrap' : {
            'exports' : 'bootstrap',
            'deps' : [
                'jquery',
                'css!../../bower_components/bootswatch/paper/bootstrap',
                //'css!../../bower_components/bootstrap/dist/css/bootstrap',
                'css!../../bower_components/bootstrap/dist/css/bootstrap-theme']
        }

    },

    'map' : {
        '*' : {
            'css': '../../bower_components/require-css/css',
            'Service': '../Common/services',
            'Resource': '../Common/resources',
            'Filter': '../Common/filters',
            'Directive': '../Common/directives',
            'Controller': '../Common/controllers',
            'Common': '../Common',

            // Pages
            'Home': '../Home',
            'Profile': '../Profile',
            'Main': '../Main',
            'Detail': '../Detail',
            'Admin': '../Admin'
        }
    },

    'deps' : ['app']

});
