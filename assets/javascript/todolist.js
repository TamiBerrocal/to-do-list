//$("li").on("click", function() { $(this).toggleClass("done") });
$("ul").on("click", "li", function() { $(this).toggleClass("done") });

$("ul").on("mouseenter", "li", function() {
    $(this).append(`  <i class='fa fa-trash bin' aria-hidden='true'></i>`);
});

$("ul").on("mouseleave", "li", function(e) {
    $(this).children(".bin").remove();
    e.stopPropagation();
});

//$("span").on("click", function(e) {
$("ul").on("click", ".bin", function(e) {
    //$(this).parent().hide(); //Esconde el elemento
    $(this).parent().remove(); //Remueve el elemento
    e.stopPropagation();
});

$("input[type='text']").on("keypress", (function(e) { //El [type='text'] en el selector permite limitar la selección a los input de tipo "text"
    if(e.key === "Enter") {
        $("ul").append(`<li><i class="far fa-square"></i> ${$(this).val()}</li>`);
        $(this).val(""); //$(this).val() recupera el valor del input
        event.stopPropagation();
    }
}));
