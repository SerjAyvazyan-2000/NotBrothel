
new Swiper('.franchise-swiper', {
    slidesPerView: 2.2,
    spaceBetween: 40,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-franchise-next',
        prevEl: '.swiper-franchise-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        567: {
            slidesPerView: 2,
            spaceBetween: 10

        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 20

        },
        1215: {
            slidesPerView: 2.2,
            spaceBetween: 40
        },
    }

});
