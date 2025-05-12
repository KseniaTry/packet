import { gsap } from "gsap";

const initBntAnimation = () => {
  const timeline = gsap.timeline();
  timeline.addLabel('start');

  // текст заголовка и нижнего текста появляется при прохождении 50% блока
  // подложка появляется сразу
  timeline.to('.btn', {opacity: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  // timeline.to('[data-class="winner-text"]', { opacity: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');

  // timeline.from('[data-class="winner-content"]', {opacity: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  // timeline.to('[data-class="winner-content"]', { opacity: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
}

export { initBntAnimation }
