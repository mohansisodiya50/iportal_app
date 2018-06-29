$(function () {
    $("#iPortalTable").igGrid({
        columns: [
            { headerText: "Year", key: "year", dataType: "number" },
            { headerText: "Date", key: "date", dataType: "date" },
            { headerText: "Title", key: "title", dataType: "string" },
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
                    columnSettings: [{
                        columnKey: "year",
                        isGroupBy: true
                    }]
                }
                ],
        width: "100%",
        dataSource: reports
    });
});
