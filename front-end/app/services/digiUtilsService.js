 /// <reference path="../../typings/tsd.d.ts" />
(function () {
    'use strict';

    angular.module('SiteRemi').factory('digiUtilsService', digiUtilsService);

    digiUtilsService.$inject = ['$rootScope', 'appConfig', '$window', '$http', '$cacheFactory', '$q'];

    function digiUtilsService($rootScope, config, $window, $http, $cacheFactory, $q) {
        var service = {
            activateController: activateController,
            transformationToArray: transformationToArray,
            getFormattedUrl: getFormattedUrl,
            invalidateCache: invalidateCache,
            getCurrentDate: getCurrentDate
        };

        return service;

        function activateController(promises, controllerId) {
            return $q.all(promises).then(function () {
                    var data = {controllerId: controllerId};
                    //$activityIndicator.stopAnimating();
                    $broadcast('controller.activateSuccess', data);
                },
                function(error) {
                    // Closing the busy indicator when error occured
                });
        }

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

        // this function verify if the data is an array and if not
        function transformationToArray(data) {
            if (!_.isArray(data))
            {
                if (data === '' || data === undefined)
                {
                    data = [];
                }
                else {
                    var intermediaire = data;
                    data = [];
                    data.push(intermediaire);
                }
            }
            return data;
        }

        function getFormattedUrl(url) {
            if (url) {
                url = url.replace(/[^a-zA-Z0-9 ]/g, '');
                url = url.replace(/\s/g, '_');
                url = url.toLowerCase();
            }

            return url;
        }

        function invalidateCache(apiUrl) {
            var url = sprintf(apiUrl, config.stub);
            var httpCache = $cacheFactory.get('$http');
            console.log('Invalidate cache for ', url);
            httpCache.remove(url);
        }

        function getCurrentDate() {
            var now = new Date();
            var minutes = now.getMinutes();
            var hours = now.getHours();
            var month = now.getMonth() + 1;
            if (minutes   < 10) {minutes   = '0' + minutes;}    // formatting values of date
            if (hours   < 10) {hours   = '0' + hours;}
            if (month   < 10) {month   = '0' + month;}
            return now.getDate() + '/' + month + '/' + now.getFullYear() + ' ' + hours + ':' + minutes;
        }

    }
})();
