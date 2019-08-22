//$("li").on("click", function() { $(this).toggleClass("done") });
$("ul").on("click", ".checkbox", function() {
    $(this).parent().children(".task-desc").toggleClass("done");
});

$(".new-task").on("keypress", (function(e) { //"input[type='text']": el "[type='text']" en el selector permite limitar la selección a los input de tipo "text"
    if(e.key === "Enter") {
        $("ul").append(`<li class="task"><input type="checkbox" class="checkbox"><span class="task-desc">${$(this).val()}</span><i class='fa fa-trash bin' aria-hidden='true'></i></li>`);
        $(this).val(""); //$(this).val() recupera el valor del input
        event.stopPropagation();
    }
}));