$(document).ready(() => {
    changeColor();
})

// Today's date function
var displayDate = $("#currentDay");
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$(displayDate).append(todaysDate);

var container = $("#container");
var actualHour = moment().format("H");

// function change color
function changeColor() {
    $(".row.content").each(function (index) {
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


