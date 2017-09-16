(function () {
    'use strict';

    angular
        .module("uiroute")
        .controller('tabController', tabController)
        ;

    tabController.$inject = [
        '$location',
        '$state',
        'tabService'

    ];



    function tabController($location, $state, tabService) {
        //console.log("indexController init");

        var vm = this;
        vm.title = "Tabs";
        vm.tabs = [];
        vm.Selectedtab = "1"; //sets initial tab

        vm.tabs = tabService.GetAllTabs('/app/test/tab/tab.tabs.json').then(function (data) {
            vm.tabs = data;
            console.log('tabController GetAllTabs() success...');
        }).catch(function (response) {
            console.log('GetAllTabs error...');
            //deferred.reject("Tab file Failed to load");
        });


        vm.scrlTabsApi = {};
        vm.tab1Show = false;

        vm.tabSelected = function (route) {
            $state.go(route);
        };

        vm.active = function (route) {
            return $state.is(route);
        };

        //$scope.$on("$stateChangeSuccess", function () {
        //    $scope.tabs.forEach(function (tab) {
        //        tab.active = $scope.active(tab.route);
        //    });
        //});



        //  http://plnkr.co/edit/YJNDaQ?p=preview
        //  https://github.com/VersifitTechnologies/angular-ui-tab-scroll
        vm.reCalcScroll = function () {
            if (vm.scrlTabsApi.doRecalculate) {
                vm.scrlTabsApi.doRecalculate();
            }
        };

        vm.scrollIntoView = function (arg) {
            if (vm.scrlTabsApi.scrollTabIntoView) {
                vm.scrlTabsApi.scrollTabIntoView(arg);
            }
        };

        vm.addTab = function () {
            vm.tabs.push({
                heading: 'New Tab ' + vm.tabs.length,
                content: 'This is the content for a NEW tab ' + vm.tabs.length
            });
        };

        vm.removeTab = function () {
            vm.tabs.splice(vm.tabs.length - 1, 1);
        };


    }

})();




