//add the eventlistener to the parent "ul"
//.on() only listen on the event that exist when the page loads
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
        $("ul").append("<li><span>X</span> " + newTodo + "</li>")
    }
})