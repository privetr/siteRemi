/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('photosCtrl', photosCtrl);

    photosCtrl.$inject = [];

    /* @ngInject */
    function photosCtrl() {
        /* jshint validthis: true */
        var vm = this;
        vm.display = true;

    }
})();
