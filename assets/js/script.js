$(document).ready(() => {
    changeColor();
    populateTable();
})

// Today's date function
var displayDate = $("#currentDay");
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$(displayDate).append(todaysDate);


var actualHour = moment().format("H");
var textArea = $(".textarea");
var rowContent = $(".row.content")

// function change color
function changeColor() {
    rowContent.each(function (index) {
        var className = "";
        if (index + 8 == actualHour) {
            className = "present";
        } else if (index + 8 < actualHour) {
            className = "past"
        } else {
            className = "future"
        }
        $(this).children().eq(1).addClass(className);
    });
}

//function to save tasks on local storage
function save(index) {
    var event = rowContent.eq(index).children().eq(1).children().eq(0).val();
    console.log(event);
    localStorage.setItem(index, event);
}

//function to popluate tasks from local storage
function populateTable() {
    rowContent.each(function (index) {
        var event = localStorage.getItem(index);
        $(this).children().eq(1).children().eq(0).val(event);
    });
}




