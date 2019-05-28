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
            items:3
        },
        1000:{
            items:4
        }
    }
})

