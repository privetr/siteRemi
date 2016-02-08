/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

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
