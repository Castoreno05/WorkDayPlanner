var dayMonth = moment().format("dddd, MMMM Do");
$("#currentDay").text(dayMonth);


var saveButton = document.getElementById("saveIcon");
var saveButtonTwo = document.getElementById("saveIcon2");
var saveButtonThree = document.getElementById("saveIcon3");
var saveButtonFour = document.getElementById("saveIcon4");
var saveButtonFive = document.getElementById("saveIcon5");
var saveButtonSix = document.getElementById("saveIcon6");
var saveButtonSeven = document.getElementById("saveIcon7");
var saveButtonEight = document.getElementById("saveIcon8");
var saveButtonNine = document.getElementById("saveIcon9");

saveButton.addEventListener("click", save);
saveButtonTwo.addEventListener("click", save);
saveButtonThree.addEventListener("click", save);
saveButtonFour.addEventListener("click", save);
saveButtonFive.addEventListener("click", save);
saveButtonSix.addEventListener("click", save);
saveButtonSeven.addEventListener("click", save);
saveButtonEight.addEventListener("click", save);
saveButtonNine.addEventListener("click", save);

function save() {
    console.log("you have clicked the icon"); 
}
