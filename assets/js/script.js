$(document).ready(function () {
    populateTable();
});

// Today's date function
var displayDate = $("#currentDay");
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$(displayDate).append(todaysDate);

var container = $("#container");


//function to create the table
function populateTable() {
    for (var i = 0; i <= 24; i++) {
        var rowElement = document.createElement("div");
        rowElement.classList.add("row");
        container.append(rowElement);
        for (var generateColumn = 0; generateColumn < 3; generateColumn++) {
            var columnElement = document.createElement("div");
            columnElement.classList.add("col-sm");
            rowElement.append(columnElement);
        }
    }
}





