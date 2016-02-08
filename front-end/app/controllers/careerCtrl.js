/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('careerCtrl', careerCtrl);

    careerCtrl.$inject = ['$q', 'digiLookUp', '$scope', 'Page'];

    /* @ngInject */
    function careerCtrl($q, digiLookUp, $scope, Page) {
        /* jshint validthis: true */
        var vm = this;

        Page.setTitle('Parcours - Site de Rémi Privet');
        Page.setDescription('Site de Rémi Privet, ingénieur en informatique, mon parcours, mes expériences professionnelles, mes passions');
        Page.setKeywords('Rémi Privet, ingénieur, informatique, esisar, grenoble-inp, iae grenoble, passions, développement');

        vm.displayEsisar = false;
        vm.displayIae = false;
        vm.displayKapt = false;
        vm.displayCpro = false;
        vm.displayMarkem = false;

        $('.carousel').carousel();

    }
})();
