define(['app'], function (app) {
    "use strict";
    app
        .constant('tmpl', {})
        .constant('datepickerConfig', {
            formatDay: 'dd',
            formatMonth: 'MMMM',
            formatYear: 'yyyy',
            formatDayHeader: 'EEE',
            formatDayTitle: 'MMMM yyyy',
            formatMonthTitle: 'yyyy',
            datepickerMode: 'day',
            minMode: 'day',
            maxMode: 'year',
            showWeeks: false,
            startingDay: 0,
            yearRange: 20,
            minDate: null,
            maxDate: null
        })
        .constant('datepickerPopupConfig', {
            datepickerPopup: 'yyyy/MM/dd 00:00:00',
            showWeeks: false,
            currentText: '今天',
            clearText: '清除',
            closeText: '关闭',
            showButtonBar: true,
            closeOnDateSelection: true
        })
        .constant('url', {
            text: window.BASEPATH + '/text',
            naviUrl:window.BASEPATH +'index/menu',
            permUrl:window.BASEPATH +'index/perm',
            passwdUrl:window.BASEPATH +'index/oauth/user/passwd',
            printMaps:'data/common/printMaps.json',
            printTemps:'data/common/printTemplate.json',

            qcOrderQueryUrl: window.BASEPATH + '/qc/order',
            qcOrderConfirmUrl: window.BASEPATH + '/qc/order/confirm',
            qcOrderCancelUrl: window.BASEPATH + '/qc/order/cancel',
            qcOrderSyncRefundUrl: window.BASEPATH + '/qc/order/refund',
            qcOrderWaybillPrint: window.BASEPATH + '/qc/order/print',
            qcWhShelveUrl: window.BASEPATH + '/qc/base/shelve',
            qcTradeUserUrl: window.BASEPATH + '/qc/trade/user',
            qcPickOrderUrl: window.BASEPATH + '/qc/order/pick',
            sellRefundUrl: window.BASEPATH + '/qc/order/sell/refund',
            callPunishUrl: window.BASEPATH + 'qc/report/punish',
            shipmentReportUrl: window.BASEPATH + 'qc/report/delivery/order',
            efficiencyUrl: window.BASEPATH + 'qcLog/efficiency',
            exceptionLogUrl: window.BASEPATH + 'exceptionLog',
            efficiencyUrlDetail: window.BASEPATH + 'qcLog/efficiency/detail'
        });

});
