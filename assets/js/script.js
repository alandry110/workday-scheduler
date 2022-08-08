// MOMENT.JS 
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));

// Hours for Local Storage
$("#7am .description").val(localStorage.getItem("7am"));
$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));


// SaveBtn Event Listener
$(".saveBtn").on("click", function () {
  var description = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
    
  localStorage.setItem(description, hour);
})


function scheduleTask() {
  var currentTime = moment().hour();
  
  $(".time-block").each(function () {
    
    var hourId = parseInt($(this).attr("id").split("hour")[1]);
    
    if (hourId > currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (hourId === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}

scheduleTask();
