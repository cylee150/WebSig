/**
 * Created by leedaniel on 15. 1. 18..
 */

requirejs.config({
    'baseUrl' : 'js',

    'paths' : {
        'jquery' : '../../bower_components/jquery/dist/jquery',
        'async' : '../../bower_components/async/lib/async',
        'angular' : '../../bower_components/angular/angular',
        'bootstrap' : '../../bower_components/bootstrap/dist/bootstrap'
    },

    'shim' : {

    },

    'map' : {
        '*' : {
        'Module' : '../modules'
        }
    },

    'deps' : ['main']

});
