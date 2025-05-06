import { addSwiperClass, removeSwiperClass } from "../utils/swiper-class-switcher";
import { addLotteryPeriodCardColors, resetLotteryPeriodCardColors } from "./lottery-colors";

// инициализация свайпера происходит только при переключении на мобильную версию
const lotterySliders = document.querySelectorAll('[data-class="lottery-swiper"]');
const breakpoint = window.matchMedia(`(max-width: ${767}px)`);
let lotterySwiper;

const initLotterySwiper = (slider) => {
    lotterySwiper = new Swiper(slider, {
      slideClass: 'lottery-card',
      slidesPerView: 2,
      spaceBetween: 16,
      loop: true,
      loopedSlides: 1,
      allowTouchMove: true,
    });
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    addLotteryPeriodCardColors();
    lotterySliders.forEach((slider) => {
      const swiperWrapper = slider.querySelector('[data-class="lottery-swiper-wrapper"]');
      const swiperSlides = slider.querySelectorAll('[data-class="lottery-card"]');
      if (swiperSlides.length > 1) {
        addSwiperClass(slider, swiperWrapper, swiperSlides);
        initLotterySwiper(slider);
      }
    })
  } else {
    resetLotteryPeriodCardColors();
    lotterySliders.forEach((slider) => {
      const swiperWrapper = slider.querySelector('[data-class="lottery-swiper-wrapper"]');
      const swiperSlides = slider.querySelectorAll('[data-class="lottery-card"]');
      removeSwiperClass(slider, swiperWrapper, swiperSlides);
    })
    if (lotterySwiper !== undefined) {
      lotterySwiper.destroy();
    }
  }
};

const initLotterySlider = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  if (window.innerWidth < 767) {
    addLotteryPeriodCardColors();
    lotterySliders.forEach((slider) => {
      const swiperWrapper = slider.querySelector('[data-class="lottery-swiper-wrapper"]');
      const swiperSlides = slider.querySelectorAll('[data-class="lottery-card"]');
      if (swiperSlides.length > 1) {
        addSwiperClass(slider, swiperWrapper, swiperSlides);
        initLotterySwiper(slider);
      }
    })
  }
};

export { initLotterySlider };
