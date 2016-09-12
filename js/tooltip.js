$(function functionName() {
    $('.hover').hide();

    $('.user-data').on('mouseover', function() {
        $(this).siblings('.hover').show().animate({opacity: '0.6'}, 2000);
    });

    $('.user-data').on('mouseout', function() {
        $(this).siblings('.hover').hide();
    });
});
