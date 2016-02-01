/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('applicationsCtrl', applicationsCtrl);

    applicationsCtrl.$inject = ['$q', 'digiLookUp', '$scope'];

    /* @ngInject */
    function applicationsCtrl($q, digiLookUp, $scope) {
        /* jshint validthis: true */
        var vm = this;

    }
})();
