/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */
/// TODO : Improve lookup service with caching data
(function() {
    'use strict';

    angular
        .module('SiteRemi')
        .factory('digiLookUp', digiLookUp);

    digiLookUp.$inject = ['$http', 'appConfig', 'sprintf', 'digiUtilsService', 'refData', '$q'];

    /* @ngInject */
    function digiLookUp($http, appConfig, sprintf, utils, refData, $q) {
        var service = {
        };

        return service;
    }
})();
