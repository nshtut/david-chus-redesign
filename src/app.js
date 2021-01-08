(function(){
    'use strict';
    angular.module('myApp',[])
    .controller('myController',myController);

    function myController($http,globalService,ApiPath){
        var app = this;
        app.$onInit = function(){
            return $http.get(ApiPath+'/categories.json').then(
                function(response){
                    for(var i=0;i<response.data.length;i++){
                        globalService.categories.push(response.data[i]);
                    }
                }
            );
        };
        console.log(globalService.categories);
        app.menuCategories=globalService.categories;
    }

})();