$(".text input").on("focus", function() {
    $(this).addClass("focus")
});

$(".text input").on("blur", function() {
    if ($(this).val() == "")
        $(this).removeClass("focus")
})