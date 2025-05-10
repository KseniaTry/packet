import { gsap } from "gsap";

const breakpoint = window.matchMedia(`(max-width: ${767}px)`);

const animateDesktopHero = () => {
  const timeline = gsap.timeline();
  timeline.addLabel('start');

  // Изображение (Main_img)выезжает справа на 55px (x 720 → x 665),
  // сверху на 25 px (y 30 → y 55), его opacity меняется с 0 на 100%.
  timeline.from('[data-class="hero-index-image"]', {x: 0, y: 0, opacity: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="hero-index-image"]', { x: -55, y: 25, opacity: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');

  timeline.from('[data-class="hero-winners-image"]', { x: 0, y: 0, opacity: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="hero-winners-image"]', { x: -55, y: 25, opacity: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');

  // Цветной фон (Main-page_desktop) увеличивается на 10%
  timeline.from('[data-class="hero-index-background"]', { scale: 0.9, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="hero-index-background"]', { scale: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');

  timeline.from('[data-class="hero-winners-background"]', { scale: 0.9, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="hero-winners-background"]', { scale: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
}

const animateMobileHero = () => {
  const timeline = gsap.timeline();
  timeline.addLabel('start');

  // картинка появляется из центра и увеличивается до макетного расположения (от 0 до 100%)
  timeline.from('[data-class="hero-index-image"]', { scale: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="hero-index-image"]', { scale: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');

  timeline.from('[data-class="hero-winners-image"]', { scale: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="hero-winners-image"]', { scale: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
}

const breakpointChecker = () => {
  if (breakpoint.matches) {
    animateMobileHero();
  } else {
    animateDesktopHero();
  }
}

const initHeroAnimation = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}

export { initHeroAnimation }
