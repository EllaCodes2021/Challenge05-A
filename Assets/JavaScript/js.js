$(document).ready(function (){
$("#currentDay").text (moment().format("MMM Do YY"));

currentTime();


    var saveBtnEl = $(".saveBtn");
saveBtnEl.on("click", function(){
    console.log();
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,description);
    
});

function currentTime(){
    console.log("currentTime");
    
    var currentHour = moment().hours();
    console.log(currentHour, "currentHour")
    $(".time-block").each(function(){
        var activityHour = parseInt($(this).attr("id"));
        console.log(activityHour, "activityHour");
    if (activityHour < currentHour){
        $(this).addClass("past");
    }else if (activityHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
    }else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
    });


};
currentTime();
var timerId = setInterval(currentTime, 10000);








































$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));






});