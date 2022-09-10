// $(document).ready(function () {
//     populateTable();
// });

// Today's date function
var displayDate = $("#currentDay");
var todaysDate = moment().format('dddd, MMMM Do YYYY');
$(displayDate).append(todaysDate);

var container = $("#container");
var setTimer = moment().format("HH a");
console.log(setTimer);


