$("li").click(function() {
    $(this).toggleClass("completed")
})

//use .stopPropagation() to stop bubbling
$("span").click(function(e) {
    //deleted lishould be deleted not display: none
    //add callback function to remove li with nice fadeOut effect
    $(this).parent().fadeOut(function() {
        //"this" is now referring to the parent element "li" not "span"
        $(this).remove();
    });
    e.stopPropagation();
})