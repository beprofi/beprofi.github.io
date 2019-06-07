// slider contacts
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    mouseDrag:true,
    touchDrag:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// маска для input

// валидация формы


// прокрутка для стрелки вниз
$(function(){
    $('#arrow').on('click', function(event){
        event.preventDefault();
        var top =$('#second_screen').offset().top;
        $('html, body').animate({scrollTop: top}, 1000);
    })
})
// прокрутка для верхней кнопки Заказать вниз
$(function(){
    $('#first_screen_btn').on('click', function(event){
        event.preventDefault();
        var toOrder = $('#form').offset().top;
        $('html, body').animate({scrollTop: toOrder}, 1000);
    })
});
// отправка сообщения о заказе с сайта, pop up
$(function(){
        $('#form').submit(function(){
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            $('.js_overlay_popup').fadeIn();
            $(this).find('input').val('');
            $('#form').trigger('reset');
            
        });
        return false;
    });
})
// закрытие pop up окна
$('.popup_close_btn').click(function(){  //при клике по кнопке
    $('.js_overlay_popup').fadeOut();
});




