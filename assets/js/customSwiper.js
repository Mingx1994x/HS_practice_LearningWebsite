import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.bannerSwiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});