$('.burger-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('burger-btn_active');
    $('.burger__link').toggleClass('burger__link_active');
});