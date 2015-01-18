/**
 * Created by leedaniel on 15. 1. 18..
 */

require(['jquery', 'Module/version'], function($, version) {
    $(document).ready(function() {
        console.log('Hello World');
        alert('My Version is ' + version);
    });

});