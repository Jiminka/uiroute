
(function () {
    'use strict';

    var app = angular.module('uiroute');
    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            //$qProvider.errorOnUnhandledRejections(false);
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                // State managing   
                .state('home', {
                    url: '/home',
                    templateUrl: '/app/test/index.html'
                })
                // nested list with data  
                .state('home.template', {
                    url: '/template',
                    template: 'Welcome to the C# Corner'
                })

                // nested list with controller
                .state('home.list', {
                    url: '/list',
                    templateUrl: '/app/test/homelist.html',
                    controller: function ($scope) {
                        $scope.Language = ['C#', 'VB', 'JavaScript', 'PHP'];
                    }
                })

                .state('home.grid', {
                    url: '/grid',
                    templateUrl: '/app/test/grid.html',
                    controller: 'gridController',
                    controllerAs: 'vm'
                })

                // State with multiple views  
                .state('multipleview', {
                    url: '/multipleview',
                    views: {
                        '': { templateUrl: '/app/test/multipleview.html' },
                        'ViewOne@multipleview': { template: 'Welcome to the C# Corner!' },
                        'ViewTwo@multipleview': {
                            templateUrl: '/app/test/dataList.html',
                            controller: 'CarController',
                            controllerAs: 'vm'
                        },
                        'ViewThree@multipleview': {
                            templateUrl: '/app/test/homelist.html',
                            controller: function ($scope) {
                                $scope.Language = ['C#', 'VB', 'JavaScript', 'PHP'];
                            }

                        }

                    }
                });



            $locationProvider.html5Mode(true);

        }
        ]);

})();

