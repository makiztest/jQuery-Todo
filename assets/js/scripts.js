$("li").click(function() {
    $(this).toggleClass("completed")
})

$("span").click(function(e) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    e.stopPropagation();
})

$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        var newTodo = $(this).val();
        //set as a setter. put an empty string in the input
        $(this).val("")
        $("ul").append("<li>" + newTodo + "</li>")
    }
})