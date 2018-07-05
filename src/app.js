$(function () {
    $("#iPortalTable").igGrid({
        columns: [
            { headerText: "Year", key: "year", dataType: "number" },
            { headerText: "Month", key: "month", dataType: "string", hidden: true },
            { headerText: "Date", key: "date", dataType: "date" },
            {
                    headerText: "Title",
                    key: "title",
                    dataType: "string",
                    template: "<a onClick='window.open(\"./src/test-file.pdf\")' style='color: blue;cursor: pointer;'>${title}</a>"
            },
            { headerText: "Type", key: "type", dataType: "string" },
            { headerText: "Period", key: "period", dataType: "string" },
            { headerText: "Account", key: "account", dataType: "string" },
            { headerText: "Owner", key: "owner", dataType: "string" }
        ],
        features:[
                    {
                        name: "Filtering"
                    },
                    {
                    name: "GroupBy",
                    type: "local",
                    groupedRowTextTemplate: "${val} (${count})",
                    columnSettings: [{
                        columnKey: "year",
                        isGroupBy: reports.length > 20 ? true : false
                    },
                    {
                        columnKey: "month",
                        isGroupBy: reports.length > 20 ? true : false
                    }
                  ]
                }
                ],
        width: "100%",
        dataSource: reports
    });
    $(".ui-iggrid-expandbutton.ui-iggrid-expandbuttonexpanded.ui-icon-minus").mousedown();
});
