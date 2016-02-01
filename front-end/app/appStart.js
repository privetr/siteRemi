/// <reference path="../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 03/04/2015.
 */
(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .factory('appStart', appStart);

    appStart.$inject = ['appConfig', '$rootScope', '$state', '$window'];

    /* @ngInject */
    function appStart(config, $rootScope, $state, $window) {
        var service = {
            start: start,
            reportStateChangesEnabled: false
        };

        return service;

        ////////////////

        function start() {
            if (config.debug) {
                console.log('SiteRemi app is loaded and running');
                console.log('Running version: <b>' + config.version + '</b>');
            }
            reportStateChanges();
        }

        // report to console when UI-Router state changes
        function reportStateChanges() {
            if (config.reportStateChanges) {
                appStart.reportStateChangesEnabled = true;
                $rootScope.$on('$stateChangeStart',
                    function(event, toState, toParams, fromState) {
                        console.log('stateChangeStart: from ' + fromState.name + ' to ' + toState.name);
                    });

                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        console.log('stateChangeError: from ' + fromState.name + ' to ' + toState.name + ' with error: ' + error);
                    });

                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState) {
                        console.log('stateChangeSuccess: from ' + fromState.name + ' to ' + toState.name + ' with params ' +
                        JSON.stringify(toParams));
                    });
            }
        }
    }
})();
