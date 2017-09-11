
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
                    views: {
                        'contenthome@': {
                            templateUrl: '/app/test/index.html'
                        }
                    }
                })
                // nested list with data  
                .state('home.template', {
                    url: '/template',
                    views: {
                        'content': {
                            template: 'Welcome to the C# Corner'
                        }
                    }
               })

                // nested list with controller
                .state('home.list', {
                    url: '/list',
                        views: {
                            'content': {
                                templateUrl: '/app/test/homelist.html',
                                controller: function ($scope) {
                                    $scope.Language = ['C#', 'VB', 'JavaScript', 'PHP'];
                                }
                            }
                        }
                })

                .state('home.grid', {
                    url: '/grid',
                    views: {
                        'content': {
                            templateUrl: '/app/test/grid.html',
                            controller: 'gridController',
                            controllerAs: 'vm'
                        }
                    }
               })

                .state('home.tab', {
                    url: '/tab',
                     views: {
                        'content': {
                            templateUrl: '/app/test/tab/tab.html',
                            controller: 'tabController',
                            controllerAs: 'vm'
                        }
                    }
               })

                .state('home.tab.grid', {
                    url: '/grid',
                    views: {
                        'grid': {
                            templateUrl: '/app/test/grid.html',
                            controller: 'gridController as vm'
                        }
                    }
                })




                // State with multiple views  
                .state('multipleview', {
                    url: '/multipleview',
                    views: {
                        'contenthome@': { templateUrl: '/app/test/multipleview.html' },
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

