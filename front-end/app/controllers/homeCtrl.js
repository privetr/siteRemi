/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$q', 'digiLookUp', '$scope'];

    /* @ngInject */
    function homeCtrl($q, digiLookUp, $scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.toggleMenu = function() {
            $('.button-collapse').sideNav();
        };

    }
})();
