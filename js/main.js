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
});

// e.preventDefault(); //останавливаем поведение по умолчанию
// $submenu.toggle(); //показать скрыть
// $sunmenu.slideToggle(); //animation
