$(function () {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  axios.get('http://localhost:52239/api/documents')
    .then(function (response) {
      console.log('response.data ', response.data);
       const data = response.data.map(obj => {
        let date = new Date(obj.createDate);

        return ({
        	year: date.getFullYear(),
            month: monthNames[date.getMonth()],
            date: (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear(),
            title: obj.name,
            type: obj.type,
            account: obj.accountNumber,
            documentId: obj.documentId
        });

      });
      renderTable(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function renderTable(reports) {
  $("#iPortalTable").igGrid({
      columns: [
          { headerText: "Year", key: "year", dataType: "number" },
          { headerText: "", key: "documentId", dataType: "number", hidden: true },
          { headerText: "Month", key: "month", dataType: "date", hidden: true },
          { headerText: "Date", key: "date", dataType: "date" },
          {
                  headerText: "Title",
                  key: "title",
                  dataType: "string",
                  template: "<a onClick='window.open(\"http://localhost:52239/api/documents/\" + ${documentId})' style='color: blue;cursor: pointer;'>${title}</a>"
          },
          { headerText: "Type", key: "type", dataType: "string" },
          { headerText: "Account", key: "account", dataType: "string" }
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
        ]}
      ],
      width: "100%",
      dataSource: reports
  });
  $(".ui-iggrid-expandbutton.ui-iggrid-expandbuttonexpanded.ui-icon-minus").mousedown();
}
