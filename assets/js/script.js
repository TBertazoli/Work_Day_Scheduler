var idDate = document.getElementById("currentDay");
var todaysDate = moment().format('dddd, MMMM Do YYYY');

$(idDate).append(todaysDate);