// universal 
var currentDay = moment();

// display current date
$("#dayOfWeek").text(currentDay.format("dddd").toUpperCase());

// display date
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

 // Hours for Local Storage
 //displaying data 
 $("#7am").val(localStorage.getItem("7am"));
 $("#8am").val(localStorage.getItem("8am"));
 $("#9am").val(localStorage.getItem("9am"));
 $("#10am").val(localStorage.getItem("10am"));
 $("#11am").val(localStorage.getItem("11am"));
 $("#12pm").val(localStorage.getItem("12pm"));
 $("#1pm").val(localStorage.getItem("1pm"));
 $("#2pm").val(localStorage.getItem("2pm"));
 $("#3pm").val(localStorage.getItem("3pm"));
 $("#4pm").val(localStorage.getItem("4pm"));
 $("#5pm").val(localStorage.getItem("5pm"));


  // Event Listener
  $(".saveBtn").on("click", function() {
    var description = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("data-id");
    
    // (key, value)
    localStorage.setItem(hour, description);
  });

  // Blocks are color based on hours of the day
  function scheduleTask() {
    var currentTime = currentDay.hour();
    
    $(".time-block").each(function() {
      var hourId = parseInt($(this).attr("data-id"));
      
      if (hourId < currentTime) {
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
