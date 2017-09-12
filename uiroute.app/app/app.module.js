//var uiroute = angular
//    .module('uiroute', ['ui.router']);
//https://dzone.com/articles/learn-mvc-using-angular-ui-route-1

(function () {
    'use strict';

    //'ngRoute',
    // 'ui.router'

    var app = angular.module('uiroute', [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ui.grid',
        'ui.grid.exporter',
        'ui.grid.selection',
        'ui.tab.scroll',
        'ngSanitize',
      'blockUI' // see note appmodule.txt

   ]);


    angular.module('uiroute')
        .controller('NavigationCtrl', NavigationCtrl);

    NavigationCtrl.$inject = [];

    function NavigationCtrl() {
        var vm = this;
        vm.isCollapsed = true;
        //vm.toggleCollapse = toggleCollapse;
        //vm.toggleCollapse();

        vm.initializeController = function () {
            vm.tmp = 5;
        };

        vm.toggleCollapse = function () {
            vm.isCollapsed = !vm.isCollapsed;
        };


    }



})();

