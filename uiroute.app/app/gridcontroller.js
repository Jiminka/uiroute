(function () {
    'use strict';

    angular
        .module('uiroute')
        .controller('gridController', gridController);

    gridController.$inject = ['$scope', 'ajaxService', 'alertService', '$location'];

    function gridController($scope, ajaxService, alertService, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'gridController';

        $scope.gridOpts = {};

        $scope.gridOpts = {
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: 'deltavi.csv',
            exporterPdfDefaultStyle: { fontSize: 9 },
            exporterPdfTableStyle: { margin: [30, 30, 30, 30] }, bgcolor:'blue',
            exporterPdfTableHeaderStyle: {
                fontSize: 10, bold: true, italics: true, color: 'red', background: 'yellow', fillColor:'yellow'
            },
            exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
            exporterPdfFooter: function (currentPage, pageCount) {
                return {
                    text: currentPage.toString() + ' of ' + pageCount.toString(), style:
                    'footerStyle'
                };
            },
            exporterPdfCustomFormatter: function (docDefinition) {
                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };

                return docDefinition;
            },
            exporterPdfOrientation: 'portrait',
            exporterPdfPageSize: 'LETTER',
            exporterPdfMaxGridWidth: 500,
            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link- location")),
            onRegisterApi: function (gridApi) {
                $scope.gridApi = gridApi;
            },
            //data: [
            //    { "firstName": "Cox", "lastName": "Carney", "providerName": 'data[0].providerName '},
            //    { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
            //],
            columnDefs: [
                { name: 'first1', field: 'firstName' },
                { name: 'last', field: 'lastName' },
                { name: 'Provider', field: 'providerName' }
            ]
        };

        $scope.gridOpts.data = [
            { "firstName": "Cox", "lastName": "Carney", "providerName": 'data[0].providerName ' },
            { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
        ];

        //ajaxService.ajaxGet('api/PoultryFeed/GetProviders')
        //    .then(function (response) {
        //        //var dbdata = angular.fromJson(response.data.model);
        //        var dbdata = response.data.model;
        //        var dbdata2 = [];

        //        $scope.gridOpts = {
        //            enableGridMenu: true,
        //            enableSelectAll: true,
        //            exporterCsvFilename: 'deltavi.csv',
        //            exporterPdfDefaultStyle: { fontSize: 9 },
        //            exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
        //            exporterPdfTableHeaderStyle: {
        //                fontSize: 10, bold: true, italics: true, color: 'red'
        //            },
        //            exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        //            exporterPdfFooter: function (currentPage, pageCount) {
        //                return {
        //                    text: currentPage.toString() + ' of ' + pageCount.toString(), style:
        //                    'footerStyle'
        //                };
        //            },
        //            exporterPdfCustomFormatter: function (docDefinition) {
        //                docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
        //                docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
        //                return docDefinition;
        //            },
        //            exporterPdfOrientation: 'portrait',
        //            exporterPdfPageSize: 'LETTER',
        //            exporterPdfMaxGridWidth: 500,
        //            exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link- location")),
        //            onRegisterApi: function (gridApi) {
        //                $scope.gridApi = gridApi;
        //            }
        //            //,
        //            //data: dbdata
        //            ,
        //            columnDefs: [
        //                { name: 'Provider3', field: 'providerName' },
        //                { name: 'create date', field: 'creationDateTime' }
        //            ]

        //        };

        //        //handle case where one row returned
        //        if (!Array.isArray(dbdata)) {
        //            dbdata2[0] = dbdata;
        //            $scope.gridOpts.data = dbdata2;
        //        } else {
        //            $scope.gridOpts.data = dbdata;
        //        }
        }
})();
