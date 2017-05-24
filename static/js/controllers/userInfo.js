define(['app', 'angular'], function(app, angular) {
    app.controller('userInfoController', ['$scope', '$http', function($scope, $http) {
    var  qcOrderColumns = [
        {field: 'userName', align: 'left', width: "100px", displayName:"用户名"},
        {field: 'loginName', align: 'left', width: "100px", displayName:"登陆账号"}
        ];

//        var qcOrderDataSource = wmsDataSource({
//            url: 'http://localhost:8080/fmUser/list',
//            schema: {
//                model: {
//                    id:"qcOrderId",
//                    fields: {
//                        id: { type: "number", editable: false, nullable: true }
//                    }
//                },
//                total: function (total) {
//                    return total.length > 0 ? total[0].total : 0;
//                }
//            }
//        });

//        $scope.qcOrderGridOptions = GRIDUTILS.getGridOptions({
//        data: 'myData',
//        columnDefs:qcOrderColumns,
//        enablePaging: true,
//        showFooter: true,
//        totalServerItems: 'totalServerItems',
//        pagingOptions: $scope.pagingOptions,
//        filterOptions: $scope.filterOptions
//
//        }, $scope);


    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    };
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [1, 250, 500, 1000],
        pageSize: 250,
        currentPage: 1
    };
    $scope.setPagingData = function(data, page, pageSize){
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = data;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get('http://localhost:8080/fmUser/list').success(function (largeLoad) {
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });
            } else {
                $http.get('http://localhost:8080/fmUser/list').success(function (largeLoad) {
                    $scope.setPagingData(largeLoad,page,pageSize);
                });
            }
        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.gridOptions = {
        data: 'myData',
        columnDefs:qcOrderColumns,
        enablePaging: true,
        showFooter: true,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };
}]);});