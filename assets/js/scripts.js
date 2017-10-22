$("li").click(function() {
    $(this).toggleClass("completed")
})

//use .stopPropagation() to stop bubbling
$("span").click(function(e) {
    alert("click")
    e.stopPropagation();
})