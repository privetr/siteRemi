/// <reference path="../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 01/04/2015.
 */

(function() {
    'use strict';

    var app = angular.module('SiteRemi', ['ui.router', 'config.app', 'ui.select', 'checklist-model', 'angularMoment', 'ngHolder', 'ngSanitize', 'ui.uploader', 'LocalForageModule', 'ui.materialize']);

    app.config(function($stateProvider, $urlRouterProvider, $provide, $logProvider, appConfig, uiSelectConfig) {
        $stateProvider
            .state('home', {
                url: '/accueil',
                views : {
                    'content@' : {
                        templateUrl: 'views/home.html?DIGEST',
                        controller: 'homeCtrl as vm'
                    }
                },
                data: {
                    auth: false
                }
            })
            .state('applications', {
                url: '/applications',
                views : {
                    'content@' : {
                        templateUrl: 'views/applications.html?DIGEST',
                        controller: 'applicationsCtrl as vm'
                    }
                },
                data: {
                    auth: false
                }
            })
            .state('career', {
                url: '/carriere',
                views : {
                    'content@' : {
                        templateUrl: 'views/carriere.html?DIGEST',
                        controller: 'careerCtrl as vm'
                    }
                },
                data: {
                    auth: false
                }
            })
            .state('photos', {
                url: '/photos',
                views : {
                    'content@' : {
                        templateUrl: 'views/photos.html?DIGEST',
                        controller: 'photosCtrl as vm'
                    }
                },
                data: {
                    auth: false
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/accueil');

        // Configure our exceptionhandler decorator
        $provide.decorator('$exceptionHandler', extendExceptionHandler);

        // turn debugging off/on (no info or warn)
        $logProvider.debugEnabled(appConfig.debug);
    });

    /**
     * Extend the $exceptionHandler service to also display a toast.
     * @param  {Object} $delegate
     * @return {Function} the decorated $exceptionHandler service
     */
    function extendExceptionHandler($delegate) {
        return function(exception, cause) {
            var errorData = {exception: exception, cause: cause};
            $delegate(exception, cause);
            /**
             * Could add the error to a service's collection,
             * add errors to $rootScope, log errors to remote web server,
             * or log locally. Or throw hard. It is entirely up to you.
             * throw exception;
             *
             * @example
             *     throw { message: 'error message we added' };
             */
        };
    }

    app.run(['appStart', function(appStart) {
        appStart.start();
    }]);

    app.factory('Page', function() {
        var title = 'Site de Rémi Privet';
        var description = 'Site de Rémi Privet, découvrez mes applications Android et mes développements logiciels';
        var keywords = 'Rémi Privet, ingénieur, informatique, parcours, applications, photos';
        return {
            title: function() { return title; },
            setTitle: function(newTitle) { title = newTitle; },
            description: function() { return description; },
            setDescription: function(newDescription) { description = newDescription; },
            keywords: function() { return keywords; },
            setKeywords: function(newKeywords) { keywords = newKeywords; }
        };
    });

})();
