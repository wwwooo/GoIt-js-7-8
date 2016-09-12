$(function() {
    $('.tabs__header').on('click', function() {
        $('.tabs__content').hide();
        $('.tabs__header').css('background', '#ccc');
        $(this).css('background', '#eee');
        var tabpanId = $(this).attr('aria-controls');
        $('#' + tabpanId).show();
    });

    $('[aria-controls="tabs-1"]').trigger('click');
});
