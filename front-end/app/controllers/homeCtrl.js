/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$q', 'digiLookUp', '$scope', 'Page'];

    /* @ngInject */
    function homeCtrl($q, digiLookUp, $scope, Page) {
        /* jshint validthis: true */
        var vm = this;

        Page.setTitle('Accueil - Site de Rémi Privet');
        Page.setDescription('Site de Rémi Privet, ingénieur en informatique, mon parcours, mes applications, mes passions');
        Page.setKeywords('Rémi Privet, ingénieur, informatique, parcours, applications, photos');

        vm.toggleMenu = function() {
            $('.button-collapse').sideNav();
        };

    }
})();
