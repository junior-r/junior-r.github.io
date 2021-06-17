$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0'
        }, 100 );
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ) {
            $('.ir-arriba').slideDown(100);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    })

});