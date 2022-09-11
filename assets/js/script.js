$(document).ready(() => {
    changeColor();
    populateTable();
})

// Today's date function
var displayDate = $("#currentDay");
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$(displayDate).append(todaysDate);


var actualHour = moment().format("H");
var textArea = $(".text-area");
var rowContent = $(".row.content")

// function change color
function changeColor() {
    rowContent.each(function (index) {
        var className = "";
        if (index + 8 === actualHour) {
            className = "present";
        } else if (index + 8 < actualHour) {
            className = "past"
        } else {
            className = "future"
        }
        $(this).children().eq(1).addClass(className);
    });
}

//function to save tasks
function save(index) {
    var event = rowContent.eq(index).children().eq(1).children().eq(0).val();
    console.log(event);
    localStorage.setItem(index, event);
}

function populateTable() {
    rowContent.each(function (index) {
        var event = localStorage.getItem(index);
        $(this).children().eq(1).children().eq(0).val(event);
    });
}




