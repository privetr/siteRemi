/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('applicationsCtrl', applicationsCtrl);

    applicationsCtrl.$inject = ['$q', 'digiLookUp', '$scope', 'Page'];

    /* @ngInject */
    function applicationsCtrl($q, digiLookUp, $scope, Page) {
        /* jshint validthis: true */
        var vm = this;

        Page.setTitle('Applications - Site de Rémi Privet');
        Page.setDescription('Site de Rémi Privet, découvrez mes applications Android et mes développements logiciels');
        Page.setKeywords('Rémi Privet, ingénieur, informatique, développement, applications, android');
    }
})();
