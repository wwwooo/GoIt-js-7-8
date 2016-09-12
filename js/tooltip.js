$(function functionName() {
    $('.hover').fadeOut(0);

    $('.user-data').on('focusin', function() {
        $(this).siblings('.hover').fadeIn(1000);
    });

    $('.user-data').on('focusout', function() {
        $(this).siblings('.hover').fadeOut(500);
    });
});
