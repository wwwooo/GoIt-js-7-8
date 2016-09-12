$(function() {
    $('.tabs__content').hide();
    $('#tabs-1').show();

    $('.tabs__header').on('click', function() {
        $('.tabs__content').hide();
        var tabpanId = $(this).attr('aria-controls');
        $('#' + tabpanId).show();
    });
});
