import { addSwiperClass, removeSwiperClass } from "../utils/swiper-class-switcher";
import { addLotteryPeriodCardColors, resetLotteryPeriodCardColors } from "./lottery-colors";

// инициализация свайпера происходит только при переключении на мобильную версию
const lotteryWeekSliders = document.querySelectorAll('[data-class="lottery-week-swiper"]');
const breakpoint = window.matchMedia(`(max-width: ${767}px)`);
let lotteryWeekSwiper;

const initLotteryWeekSwiper = (slider) => {
    lotteryWeekSwiper = new Swiper(slider, {
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
    lotteryWeekSliders.forEach((slider) => {
      const swiperWrapper = slider.querySelector('[data-class="lottery-week-swiper-wrapper"]');
      const swiperSlides = slider.querySelectorAll('[data-class="lottery-card"]');
      if (swiperSlides.length > 1) {
        addSwiperClass(slider, swiperWrapper, swiperSlides);
        initLotteryWeekSwiper(slider);
      }
    })
  } else {
    resetLotteryPeriodCardColors();
    lotteryWeekSliders.forEach((slider) => {
      const swiperWrapper = slider.querySelector('[data-class="lottery-week-swiper-wrapper"]');
      const swiperSlides = slider.querySelectorAll('[data-class="lottery-card"]');
      removeSwiperClass(slider, swiperWrapper, swiperSlides);
    })
    if (lotteryWeekSwiper !== undefined) {
      lotteryWeekSwiper.destroy();
    }
  }
};

const initLotteryWeekSlider = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  if (window.innerWidth < 767) {
    addLotteryPeriodCardColors();
    lotteryWeekSliders.forEach((slider) => {
      const swiperWrapper = slider.querySelector('[data-class="lottery-week-swiper-wrapper"]');
      const swiperSlides = slider.querySelectorAll('[data-class="lottery-card"]');
      if (swiperSlides.length > 1) {
        addSwiperClass(slider, swiperWrapper, swiperSlides);
        initLotteryWeekSwiper(slider);
      }
    })
  }
};

export { initLotteryWeekSlider };
