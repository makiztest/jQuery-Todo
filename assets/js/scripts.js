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
    //if keypress is equal to enter
    if(e.which === 13) {
        //grab a new todo text
        var newTodo = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li>" + newTodo + "</li>")
    }
})