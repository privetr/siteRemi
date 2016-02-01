/**
 * Created by PJCT11801 on 14/09/2015.
 */
(function() {
    'use strict';

    angular
        .module('SiteRemi')
        .directive('digiUploader', digiUploader);

    digiUploader.$inject = [];

    /* @ngInject */
    function digiUploader() {
        return {
            scope: {
                onChangeCallback: '='
            },
            link: function(scope, el) {
                el.bind('change', function (e) {
                    var files = e.target.files;
                    scope.onChangeCallback(files);
                });
            }
        };
    }
})();
