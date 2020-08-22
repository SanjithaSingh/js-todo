$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");


});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut("slow", function () {
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event) {
    if (event.which == 13) {
        var newtask = $(this).val();
        console.log(newtask);
        $(this).val("")
        $("ul").append("<li> <span class='delete'> <i class='fas fa-trash'></i> </span>" + newtask + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle("fast")
});