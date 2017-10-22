$("li").click(function() {
    $(this).toggleClass("completed")
})

//use .stopPropagation() to stop bubbling
$("span").click(function(e) {
    //add fadeout effect
    $(this).parent().fadeOut();
    e.stopPropagation();
})