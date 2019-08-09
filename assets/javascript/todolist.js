//$("li").on("click", function() { $(this).toggleClass("done") });
$("ul").on("click", ".checkbox", function() {
    $(this).parent().children(".task-desc").toggleClass("done");
});

$("ul").on("mouseenter", ".task-desc", function(e) {
    $(this).parent().append(`    <i class='fa fa-trash bin' aria-hidden='true'></i>`);
    e.stopPropagation();
});

$("ul").on("mouseleave", ".task-desc", function(e) {
    $(this).parent().children(".bin").remove();
});

//$("span").on("click", function(e) {
$("ul").on("click", ".bin", function(e) {
    //$(this).parent().hide(); //Esconde el elemento
    $(this).parent().remove(); //Remueve el elemento
    e.stopPropagation();
});

$("input[type='text']").on("keypress", (function(e) { //El [type='text'] en el selector permite limitar la selección a los input de tipo "text"
    if(e.key === "Enter") {
        $("ul").append(`<li><i class="checkbox far fa-square"></i> <span class="task-desc">${$(this).val()}</span></li>`);
        $(this).val(""); //$(this).val() recupera el valor del input
        event.stopPropagation();
    }
}));
