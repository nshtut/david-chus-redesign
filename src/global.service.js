(function(){
    angular.module('myApp')
    .service('globalService',globalService)
    .constant('ApiPath','https://jhu-course5-restaurant-server.herokuapp.com');

    function globalService($http){
        var service = this;
        service.menu_items = [];
        service.categories = [];
    }

})();