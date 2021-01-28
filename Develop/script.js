$(document).ready(function(){
    // Date and Time at top of page
    $("#currentDay").text(moment().format('lll'));

    // Saves info to local storage
    $(".saveBtn").onClick(function() {
        var description = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(description, hour);
    });

    function currentTime() {
        var 
    }

});