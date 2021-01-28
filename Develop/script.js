$(document).ready(function(){
    // Date and Time at top of page
    $("#currentDay").text(moment().format('lll'));

    // Saves info to local storage
    $(".saveBtn").on("click", function() {
        var description = $(this).siblings(".description").val();
        var timeSlot = $(this).parent().attr("id");
        localStorage.setItem(timeSlot, description);
    });

    $("#nine .description").val(localStorage.getItem("nine"));
    $("#ten .description").val(localStorage.getItem("ten"));
    $("#eleven .description").val(localStorage.getItem("eleven"));
    $("#twelve .description").val(localStorage.getItem("twelve"));
    $("#one .description").val(localStorage.getItem("one"));
    $("#two .description").val(localStorage.getItem("two"));
    $("#three .description").val(localStorage.getItem("three"));
    $("#four .description").val(localStorage.getItem("four"));
    $("#five .description").val(localStorage.getItem("five"));

});