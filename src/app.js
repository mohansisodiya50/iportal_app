$(function () {
    $("#iPortalTable").igGrid({
        columns: [
            { headerText: "Year", key: "year", dataType: "date", format: "yyyy"},
            { headerText: "Month", key: "month", dataType: "date", hidden: true, format: "MMMM" },
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
                        name: "Sorting"
                    },
                    {
                    name: "GroupBy",
                    groupedRowTextTemplate: "${val} (${count})",
                    columnSettings: [{
                        columnKey: "year",
                        isGroupBy: true
                    },
                    {
                        columnKey: "month",
                        isGroupBy: true
                    }
                  ]
                }
                ],
        width: "100%",
        dataSource: reports
    });
    $(".ui-iggrid-expandbutton.ui-iggrid-expandbuttonexpanded.ui-icon-minus").mousedown();
});
