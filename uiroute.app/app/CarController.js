
//uiroute.controller('CarController', function ($scope) {
//    'use strict';

//    $scope.CarList = ['Audi', 'BMW', 'Bugatti', 'Jaguar'];
//});
(function () {
    'use strict';

    angular
        .module('uiroute')
        .controller('CarController', CarController);

    ////masterController.$inject = ['$location', 'ajaxService', 'applicationConfiguration'
    //];

    function CarController() {
        /* jshint validthis:true */
        var vm = this;
        vm.CarList = ['Audi', 'BMW', 'Bugatti', 'Jaguar'];
    }
})();
