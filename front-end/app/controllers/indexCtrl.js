/// <reference path="../../typings/tsd.d.ts" />

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('IndexCtrl', IndexCtrl);

    IndexCtrl.$inject = ['$scope', 'Page'];

    /* @ngInject */
    function IndexCtrl($scope, Page) {
        /* jshint validthis: true */
        $scope.Page = Page;
    }
})();
