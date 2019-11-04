$('.burger-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('burger-btn_active');
    $('.burger-nav').toggleClass('burger-nav_active');
    $('.burger__link').toggleClass('burger__link_active');
});