import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  slideShadows: true,
  slidesPerGroup: 1,
  shortSwipes: true,
  simulateTouch:true,
  pagination: {
    clickable:true,
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
