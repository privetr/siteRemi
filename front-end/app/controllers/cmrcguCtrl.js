/// <reference path="../../typings/tsd.d.ts" />

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('cmrcguCtrl', cmrcguCtrl);

    cmrcguCtrl.$inject = ['$q', 'digiLookUp', '$scope', 'Page'];

    /* @ngInject */
    function cmrcguCtrl($q, digiLookUp, $scope, Page) {
        /* jshint validthis: true */
        var vm = this;

        Page.setTitle('Parcours - Site de Rémi Privet');
        Page.setDescription('Site de Rémi Privet, ingénieur en informatique, mon parcours, mes expériences professionnelles, mes passions');
        Page.setKeywords('Rémi Privet, ingénieur, informatique, esisar, grenoble-inp, iae grenoble, passions, développement');

    }
})();
