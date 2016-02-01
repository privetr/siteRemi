/* global C8O */
/// <reference path="../../typings/tsd.d.ts" />

/**
 * Created by PJCT11801 on 20/02/2015.
 */
(function() {
    'use strict';

    angular
        .module('SiteRemi')
        .constant('toastr', toastr)
        .constant('sprintf', sprintf)
        .constant('_', _)
        .constant('refData', {
            projectStatus: {
                'ABANDONNE': '1',
                'DEPLOYE': '2', // -> En Production
                'DVP_TERMINE': '3', // -> Prototype terminé
                'PROJET_DEMARRE': '4', // -> Prototype Démarré
                'PROPOSE': '5', // -> Nouvelles
                'REFUSE': '6',
                'ARCHIVE': '7',
                'SELECTIONNE': '289', //-> idée sélectionnée
                'TERMINE': '290' // -> Terminé (OK)
            },
            domains: {
                'INGENIERIE': 1,
                'TECHINDUS': 2,
                'TECHMAINT': 3
            }
        });
})();
