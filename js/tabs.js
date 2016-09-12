$(function() {
    $('.tabs__content').hide();
    $('#tabs-1').show();

    $('.tabs__header').on('click', function() {
        $('.tabs__content').hide();
        $('.tabs__header').css('background', '#ccc');
        $(this).css('background', '#eee');
        var tabpanId = $(this).attr('aria-controls');
        $('#' + tabpanId).show();
    });
});
