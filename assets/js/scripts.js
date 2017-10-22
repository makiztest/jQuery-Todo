$("li").click(function() {
    $(this).toggleClass("completed")
})

$("span").click(function(e) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    e.stopPropagation();
})

//get text input when keypress
$("input[type='text']").keypress(function(e) {
    console.log(e)
})