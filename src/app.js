(function(){
    'use strict';
    angular.module('myApp',['gs.preloaded'])
    .controller('myController',myController);

    function myController($preloaded){
        var app = this;
        app.categories = $preloaded.data;
    }

})();