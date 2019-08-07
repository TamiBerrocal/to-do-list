//$("li").on("click", function() { $(this).toggleClass("done") });
$("ul").on("click", "li", function() { $(this).toggleClass("done") });

$("ul").on("mouseover", "li", function() {
    $(this).prepend(`<i class='fa fa-trash' aria-hidden='true'></i> `);
});

$("ul").on("mouseout", "li", function() {
    $(this).next().remove();
});

//$("span").on("click", function(e) {
$("ul").on("click", ".borrar", function(e) {
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
