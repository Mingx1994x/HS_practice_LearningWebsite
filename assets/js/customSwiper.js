import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// init Swiper:
const cardSwiper1 = new Swiper(".cardSwiper1", {
    modules: [Pagination, Autoplay],
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 2000
    },
    pagination: {
        // el: ".swiper-pagination",
        el: ".cardSwiper1-pagination",
        clickable: true

    },
});

const cardSwiper2 = new Swiper(".cardSwiper2", {
    modules: [Navigation, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            navigation: {
                nextEl: ".cardSwiper2-next",
                prevEl: ".cardSwiper2-prev",
            },
        }
    }
});

const bannerSwiper = new Swiper(".bannerSwiper", {
    modules: [Navigation, Autoplay, Pagination],
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".bannerSwiper-next",
        prevEl: ".bannerSwiper-prev",
    },
    breakpoints: {
        1400: {
            slidesPerView: 1.2,
            spaceBetween: 40,
            centeredSlides: true
        }
    }
});

const cardSwiper3 = new Swiper(".cardSwiper3", {
    modules: [Pagination, Autoplay],
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".cardSwiper3-pagination",
        clickable: true
    },
});