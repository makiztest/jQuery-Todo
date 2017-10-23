$("ul").on("click", "li", function() {
    $(this).toggleClass("completed")
})

$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    e.stopPropagation();
})

$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newTodo + "</li>")
    }
})

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})