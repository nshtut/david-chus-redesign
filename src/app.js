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
                        $http({
                           method: "GET",
                           url: ApiPath+'/menu_items.json',
                           params: {
                               category: response.data[i].short_name
                           }
                        }).then(function(response){
                             globalService.menu_items.push(response.data);
                        });
                    }
                }
            );
        };
        console.log(globalService.categories);
        console.log(globalService.menu_items);
        app.menuCategories=globalService.categories;
    }

})();