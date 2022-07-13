// Need day of the week and date displayed at the top of the page
var dayMonth = moment().format("dddd, MMMM Do");
$("#currentDay").text(dayMonth);


// Variable for the save button
var saveButton = $("div.saveBtn")

// onclick for save button. When clicked the text in the input feild should save
saveButton.on("click", function () {
    // On this click we want to look for the text that the user has entered.
    var input = $(this).siblings(".time-block").children(".form-input")
    var text = input.val()
    // Then save it to local storage
    var time = $(this).siblings(".time").attr("id")
    localStorage.setItem(time, text);
});


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}


// We need to get the value. 
// loops
for (let index = 9; index <= 17 ; index++) {
    document.getElementById("event" + index).value = localStorage.getItem("time"+ index)
}


// current hours
var date = new Date();
var currentHour = date.getHours()


// create a loop to cycle through the time blocks
for (let index = 9; index < 18; index++) {
    var time = parseInt(document.getElementById("time" + index).id.replace("time", ""));
    var block = document.getElementById("block" + index);
    var input = document.getElementById("event" + index);
    if (time < currentHour) {
        block.classList.add("past")
        input.classList.add("past")
    } else if (time == currentHour) {
        block.classList.add("present")
        input.classList.add("present")
    }
    else {
        block.classList.add("future")
        input.classList.add("future")
    }
}
