import { gsap } from "gsap";

const initParticipateAnimation = () => {
  const timeline = gsap.timeline();
  timeline.addLabel('start');

  // Изображение увеличивается в размере от 0 до 100%
  timeline.from('[data-class="participate-image"]', { scale: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="participate-image"]', { scale: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');

  // Текст выезжает снизу, opacity 0 → 100%
  timeline.from('[data-class="participate-text"]', { y: '100%', opacity: 0, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
  timeline.to('[data-class="participate-text"]', { y: '0%', opacity: 1, ease: 'slow(0.1, 2, true)', duration: 0.8 }, 'start');
}

export {initParticipateAnimation}
