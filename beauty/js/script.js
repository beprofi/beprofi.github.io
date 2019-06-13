// slider contacts
$(document).ready(function(){
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        autoplay: true,
        draggable: true,
        arrows: false,
        infinite: true,
        autoplaySpeed: 4000
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        fade: true
    });
});


// открытие модального окна
$(function(){
    $("#modal_btn").click(function(){
        $("#modal").addClass("modal-is-active");
    })
})
// закрытие при клике на крестик
$(function(){
    $("#modal_close").click(function(){
        $("#modal").removeClass('modal-is-active');
    })
})
// отправка сообщения о заказе с сайта, pop up
$(function(){
        $('#modal_form').submit(function(){
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            $('.js_overlay_popup').fadeIn();
            $(this).find('input').val('');
            $('#modal_form').trigger('reset');
            
        });
        return false;
    });
})
// закрытие pop up окна
$('.popup_close_btn').click(function(){  //при клике по кнопке
    $('.js_overlay_popup').fadeOut();
});




