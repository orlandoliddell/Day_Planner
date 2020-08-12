$("#currentDay").text(moment().format("MMM Do YYYY"));
$("#hour").text(moment().format("HH"));


function update() {
    var currentHour = moment().format("HH");
    $(".hour-block").each(function(){
        var blockH = $(this).attr("id")
       
        if (currentHour>blockH) {
            $(this).addClass("past")
        }else if(currentHour=blockH) {
            $(this).addClass("present")
        }else {
            $(this).addClass("future")
        }
    })
}
update();

function save() {
    var description = $(this).siblings(".description").val();
    var key = $(this).parent().attr("id");
    var hour = $(this).siblings().text();
    var today = moment().format("MMM Do YYYY");
    localStorage.setItem(key, description)
    alert("Saved: " + "'" + description + "' "+ "for " + hour + ", " + today)
}

$(".saveBtn").on("click", save);

function displayLocal() {
    $(".description").each(function() {
        var blockD = $(this).text
    })
}
displayLocal();
$("#09").children(".description").val(localStorage.getItem("09"))
$("#10").children(".description").val(localStorage.getItem("10"))