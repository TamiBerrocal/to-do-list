const _ul = $("ul");
const _newTask = $(".new-task");

_ul.on("click", ".checkbox", function() {
    $(this).parent().find(".task-desc > .text").toggleClass("done");
});

_ul.on("click", ".task-desc > .bin", function() {
    $(this).parent().parent().remove();
});

//"input[type='text']": el "[type='text']" en el selector permite limitar la selección a los input de tipo "text"
_newTask.on("keypress", (function(e) {
    if(e.key === "Enter") {
        _ul.append(`<li class="task"><input type="checkbox" class="checkbox"><div class="task-desc"><span class="text">${$(this).val()}</span><i class='fa fa-trash bin' aria-hidden='true'></i></div></li>`);
        $(this).val("");
        event.stopPropagation();
    }
}));
