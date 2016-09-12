$(function functionName() {
    $('.user-data').on('focusin', function() {
        $(this).siblings('.tip').fadeIn(1000);
    });

    $('.user-data').on('focusout', function() {
        $(this).siblings('.tip').fadeOut(500);
    });
});
