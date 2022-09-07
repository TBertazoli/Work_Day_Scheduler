function generateDate() {
    var idDate = document.getElementById("currentDay");
    var todaysDate = moment().format('dddd, MMMM Do YYYY');
    idDate.textContent = todaysDate;    
};
generateDate();d


