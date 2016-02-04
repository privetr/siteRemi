/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('careerCtrl', careerCtrl);

    careerCtrl.$inject = ['$q', 'digiLookUp', '$scope'];

    /* @ngInject */
    function careerCtrl($q, digiLookUp, $scope) {
        /* jshint validthis: true */
        var vm = this;
        vm.displayEsisar = false;
        $('.carousel').carousel();

    }
})();
