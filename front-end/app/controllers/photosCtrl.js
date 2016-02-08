/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 29/05/2015.
 */

(function () {
    'use strict';

    angular
        .module('SiteRemi')
        .controller('photosCtrl', photosCtrl);

    photosCtrl.$inject = ['Page'];

    /* @ngInject */
    function photosCtrl(Page) {
        /* jshint validthis: true */
        var vm = this;

        Page.setTitle('Photos - Site de Rémi Privet');
        Page.setDescription('Site de Rémi Privet, ingénieur en informatique, découvrez ma passion pour la photographie, et le développement logiciel');
        Page.setKeywords('Rémi Privet, ingénieur, informatique, photos, photographie, passion');

        vm.display = true;

    }
})();
