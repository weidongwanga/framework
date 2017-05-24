define(['jquery', 'underscore'], function ($, _) {
    /**
     * Created by MLS on 15/3/5.
     */
    "use strict";
    var MLS = MLS === undefined ? {} : MLS;
    MLS.WMS = MLS.WMS === undefined ? {} : MLS.WMS;
    var gridDefaultOptions = {
        sortable: true,
        resizable: true,
        pageable: {
            refresh: true,
            pageSizes: [30, 50, 100, 200, 300, 500],
            buttonCount: 5,
            input: true,
            numeric: false,
            messages: {
                page: '',
                of: '/{0}',
                itemsPerPage: '条',
                display: "{0}-{1} 条 &nbsp;共{2}条",
                refresh: '',
                empty: '暂无数据'
            }
        },
        editable: {
            mode: "popup"
        },
        filterable: false,
        columnMenu: {
            sortable: false,
            messages: {
                columns: "显示"
            }
        }
    };
    MLS.WMS.GRIDUTILS = (function () {
        /**
         * 获得grid中行记录
         * @param grid
         * @returns {Array}
         */
        var getSelectedData = function (grid) {
            var selectedRow = grid.select();
            var selectedData = [];
            selectedRow.each(function (index, row) {
                selectedData.push(grid.dataItem(row));
            });
            return selectedData;
        };

        /**
         * 获得grid中行记录
         * @param grid
         * @returns {Array}
         */
        var getCustomSelectedData = function (grid) {
            //var rows = $('[kendo-grid]').find(".k-state-selected[role='row']");
            var rows = grid.element.find(".k-state-selected[role='row']");//5.5 解决多个kendo-grid，选中后有多个rows
            var selectedData = [];
            _.each(rows, function (row) {
                if ($(row).find('.commonColumns_sub_checkbox').length > 0) {
                    if (grid.dataItem(row)) {
                        selectedData.push(grid.dataItem(row));
                    }
                }
            });
            return selectedData;
        };


        var getGridOptions = function (options, scope) {
//            var functionOptions = ['edit', 'dataBound', 'detailExpand'];
//            _.each(functionOptions, function (optionKey) {
//                if (_.isFunction(options[optionKey])) {
//                    var newOptions = _.clone(options);
//                    options[optionKey] = function (e) {
//                        newOptions[optionKey].call(e.sender, e);
//                        gridDefaultOptions[optionKey].call(e.sender, e);
//                    };
//                }
//            });
            _.defaults(options, gridDefaultOptions);

            // 所有页面添加导出按钮
//            if(options.exportable){
//                options.toolbar =  options.toolbar || [];
////                options.toolbar.push({template: '<kendo-button class="k-primary" ng-click="exportExcelAll($event)">导出所有</kendo-button>'
//                });
//            }

            // 弹出window统一设置成不能修改大小
            if (_.isObject(options.editable) && options.editable.mode === "popup") {
                if (!_.isObject(options.editable.window)) {
                    options.editable.window = {};
                }
                options.editable.window.resizable = false;
            }

            if (scope !== undefined) {
                var btnIds = getButtonIds(scope.user, scope.location.path().substring(1));
                if (_.isArray(btnIds)) {
                    // 根据权限过滤toolbar的操作Btn
                    if (_.isArray(options.toolbar)) {
                        options.toolbar = _.filter(options.toolbar, function (btn) {
                            if (btn.className === undefined) {
                                return true;
                            }
                            if (_.intersection(btnIds, btn.className.split(" ")).length !== 0) {
                                return true;
                            }
                        });

                    }
                    // 根据权限过滤操作
                    if (_.isArray(options.columns)) {
                        _.each(options.columns, function (column) {
                            if (column.title === "操作") {
                                column.command = _.filter(column.command, function (command) {
                                    if (command.className !== undefined &&
                                        _.intersection(btnIds, command.className.split(" ")).length !== 0) {
                                        return true;
                                    }
                                });
                            }
                        });
                    }
                }
            }

            return options;
        };

        var customButton = function (name, text, callback) {
            this.name = name;
            this.text = text;
            this.callback = callback;
        };
        customButton.prototype = {
            init: function (options, callback) {
                if (!_.isFunction(callback)) {
                    callback = this.callback;
                }
                return { name: this.name, text: this.text, className: options.className,
                    click: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var tr = $(e.target).closest("tr"),
                            grid = this;
                        var data = grid.dataItem(tr);
                        callback(grid, data);
                    }};
            }
        };
        var deleteButton = new customButton("Delete", "<span class='k-icon k-delete'></span><span ng-hide='dataItem.deleteHide'>删除</span></a>", function (grid, data) {
//            $.when(kendo.ui.ExtOkCancelDialog.show({
//                    title: "确认",
//                    message: "是否确定删除数据",
//                    icon: 'k-ext-question'})
//            ).done(function (resp) {
//                    if (resp.button === "OK") {
//                        if (_.isFunction(grid.dataSource.transport.preDestroy)) {
//                            grid.dataSource.transport.preDestroy(data, grid);
//                        } else {
//                            if (_.isFunction(grid.options.customerRemove)) {
//                                grid.options.customerRemove.apply(grid, [data]);
//                            }
//                            grid.dataSource.remove(data);
//                        }
//                    }
//                });
        });


        var CommonOptionButton = function (type) {
            var editBtn = 'btn-auth-edit',
                deleteBtn = 'btn-auth-delete';
            if (type !== undefined) {
                editBtn = editBtn + "-" + type;
                deleteBtn = deleteBtn + "-" + type;
            }
            return { title: '操作', command: [
                { name: "edit", className: editBtn, template: "<a class='k-button k-button-icontext k-grid-edit' href='\\#'><span class='k-icon k-edit'></span>编辑</a>",
                    text: { edit: "编辑", cancel: "取消", update: "更新" } },
                deleteButton.init({className: deleteBtn})
            ],
                width: "100px"
            };
        };

        var editOptionButton = function (type) {
            var editBtn = 'btn-auth-edit';
            if (type !== undefined) {
                editBtn = editBtn + "cancel-" + type;
            }
            return { title: '操作', command: [
                { name: "edit", className: editBtn, template: "<a class='k-button k-button-icontext k-grid-edit' href='\\#'><span class='k-icon k-edit'></span>编辑</a>",
                    text: { edit: "编辑", cancel: "取消", update: "更新" } }
            ],
                width: "100px"
            };
        };

        var deleteOptionButton = function (type) {
            var deleteBtn = 'btn-auth-delete';
            if (type !== undefined) {
                deleteBtn = deleteBtn + "-" + type;
            }
            return { title: '操作', command: [
                deleteButton.init({className: deleteBtn})
            ],
                width: "100px"
            };
        };

        return {
            getSelectedData: getSelectedData,
            getGridOptions: getGridOptions,
            CommonOptionButton: CommonOptionButton,
            editOptionButton: editOptionButton,
            deleteOptionButton: deleteOptionButton,
            deleteButton: deleteButton.init({className: 'btn-auth-delete'}),
            getCustomSelectedData: getCustomSelectedData,
            selectSingleRow: selectSingleRow,
            selectAllRow: selectAllRow
        };
    }());
});