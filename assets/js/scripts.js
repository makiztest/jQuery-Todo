$("li").click(function() {
    $(this).toggleClass("completed")
})

//use .stopPropagation() to stop bubbling
$("span").click(function(e) {
    //remove selected li when click X
    $(this).parent().remove();
    e.stopPropagation();
})