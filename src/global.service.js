(function(){
    angular.module('myApp')
    .service('globalService',globalService)
    .constant('ApiPath','https://jhu-course5-restaurant-server.herokuapp.com');

    function globalService(){
        var service = this;
        service.categories = [];
    }

})();