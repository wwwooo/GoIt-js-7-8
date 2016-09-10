$(function() {
    $('.tabs__content').hide();
    $('#content-one').show();

    $('#header-one').on('click', function() {
        $('.tabs__content').hide();
        $('#content-one').show();
    });

    $('#header-two').on('click', function() {
        $('.tabs__content').hide();
        $('#content-two').show();
    });

    $('#header-three').on('click', function() {
        $('.tabs__content').hide();
        $('#content-three').show();
    });

    $('.hover').hide();

    $('.user-data').on('mouseover', function() {
        $(this).siblings('.hover').show().fadeOut(3000);
    });

    $('.user-data').on('mouseout', function() {
        $(this).siblings('.hover').hide();
    });
});
