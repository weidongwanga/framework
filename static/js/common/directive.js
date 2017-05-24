define(['app'], function (app) {
    "use strict";
    app.directive('panelHeadingSearch', function () {
        return {
            restrict: 'EA',
            transclude: true,
            priority: 1000,
            template: function (tE, tA) {
                var bindUi = tA.bindUi;
                return '<div class="panel-heading m-b-5">' +
                    '<form class="pure-form pure-form-land" bind-ui="' + bindUi + '">' +

                    '<div class="panel-box-main">' +
                    '<div class="panel-box-left"><span ng-transclude></span>' +
                    '</div>' +
                    '<div class="panel-box-right">' +
                    '<wms-search-button></wms-search-button>' +
                    '<wms-reset-button></wms-reset-button>' +
                    '</div>' +
                    '</div>' +
                    '</form>' +
//                    '<button class="btn m-b-ms w-ms btn-info up-down" id="J_seachToggle"><i class="fa fa-w fa-angle-double-down"></i>' +
//                    '</button>' +
                    '</div><script></script>';
            }

        };
    }).directive('wmsSearchButton', function () {
        return {
            restrict: 'EA',
            scope: {},
            controller: function ($scope, $element) {
                $scope.searchGrid = function () {


                };
            },
            template: function (tE, tA) {
                return "<button ng-click='searchGrid()' class='btn order-btn'><i class='fa fa-search faIcon'></i>查询</button>";
            }
        };
    }).directive('wmsResetButton', function () {
        return {
            restrict: 'EA',
            scope: {
//                customerResetFn: '@customerResetFn'
            },
            controller: function ($scope, $element) {

                $scope.reset = function () {
                    if (_.isFunction($scope.$parent.customerResetFn)) {
                        $scope.$parent.customerResetFn();
                        return;
                    }
                    var form = $element.parents("form");
                    if ($scope.$parent.query !== undefined) {
                        $scope.$parent.query = {};
                    }
                    if ($(form.find("input,select,checkbox")[0]).scope().query !== undefined) {
                        $(form.find("input,select,checkbox")[0]).scope().query = {};
                    }
                    $(form)[0].reset();//added by zw 清空radio
                };
            },
            template: function (tE, tA) {
                return "<a  ng-click='reset()' class='btn order-btn btn-cancel'><i class='fa fa-repeat faIcon'></i>重置</a>";
            }
        };
    });
});
