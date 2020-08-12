$("#currentDay").text(moment().format("MMM Do YY"));
$("#hour").text(moment().format("HH"));


function update() {
    var currentHour = moment().format("HH");
    $(".hour-block").each(function(){
        var blockH = $(this).attr("id")
        console.log(blockH);
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
    localStorage.setItem(key, description)
}

$(".saveBtn").on("click", save)