import { gsap } from "gsap";

let matchMedia = gsap.matchMedia();

const initHeroAnimation = () => {
  const timeline = gsap.timeline();
  timeline.addLabel('start');

  // Изображение (Main_img)выезжает справа на 55px (x 720 → x 665),
  // сверху на 25 px (y 30 → y 55), его opacity меняется с 0 на 100%.
  matchMedia.add("(min-width: 1023px)", () => {
    timeline.fromTo('[data-animation="hero-image"]',
    { x: 0, y: 0, opacity: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 },
    { x: -55, y: 25, opacity: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 },
    'start');

  // Цветной фон (Main-page_desktop) увеличивается на 10%
  timeline.fromTo('[data-animation="hero-background"]',
    { scale: 0.9, ease: 'slow(0.1, 2, true)', duration: 0.8 },
    { scale: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 },
    'start');
  });

  matchMedia.add("(max-width: 1023px)", () => {
  // картинка появляется из центра и увеличивается до макетного расположения (от 0 до 100%)
  timeline.from('[data-animation="hero-image"]',
    { scale: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 },
    { scale: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 },
    'start');
  });
}

export { initHeroAnimation }
