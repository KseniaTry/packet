import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initAnimation = () => {
  const batchArray = [];

  // блок participate
  const participateImage = ScrollTrigger.batch('[data-class=\'participate-image\']', {
    onEnter: (batch) => gsap.fromTo(batch,
        {scale: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1},
        {scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(participateImage);

  const participateText = ScrollTrigger.batch('[data-class=\'participate-text\']', {
    onEnter: (batch) => gsap.fromTo(batch,
        {y: '100%', autoAlpha: 1, duration: 0.45, stagger: 0.1},
        {y: '0%', autoAlpha: 1, duration: 0.45, stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(participateText);

  // блоки lottery (по неделям и месяцам)
  const lotteryTitle = ScrollTrigger.batch('[data-class=\'lottery-title\']', {
    onEnter: (batch) => gsap.fromTo(batch, {
      y: '100%', opacity: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1,
    }, {y: '0%', opacity: 1, autoAlpha: 1, duration: 0.45, stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(lotteryTitle);

  const lotteryCard = ScrollTrigger.batch('[data-class=\'lottery-card\']', {
    onEnter: (batch) => gsap.fromTo(batch,
        {scale: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1},
        {scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(lotteryCard);

  const lotteryPeriod = ScrollTrigger.batch('[data-class=\'lottery-period\']', {
    onEnter: (batch) => gsap.fromTo(batch,
        {scale: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1},
        {scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(lotteryPeriod);

  const lotteryCardText = ScrollTrigger.batch('[data-class=\'lottery-card-text\']', {
    onEnter: (batch) => gsap.fromTo(batch,
        {scale: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1},
        {scale: 1, autoAlpha: 1, duration: 0.45, stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(lotteryCardText);

  const lotteryCardImage = ScrollTrigger.batch('[data-class=\'lottery-card-image\']', {
    onEnter: (batch) => gsap.fromTo(batch,
        {scale: 0, autoAlpha: 1, duration: 0.45, ease: 'back.out(1.5)', stagger: 0.1},
        {scale: 1, autoAlpha: 1, duration: 0.45, ease: 'back.out(1.5)', stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(lotteryCardImage);

  // блок winners
  const winnerText = ScrollTrigger.batch('[data-class=\'winner-text\']', {
    onEnter: (batch) => gsap.fromTo(batch,
        {opacity: 0, autoAlpha: 1, duration: 0.45, stagger: 0.1},
        {opacity: 1, autoAlpha: 1, duration: 0.45, stagger: 0.1}),
    start: 'top center',
  });
  batchArray.push(winnerText);

  // хак с помощью которого мы анимируем элементы, если долистали до конца страницы, а тригер не успел сработать
  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onLeave: () => {
      batchArray.forEach((array) => {
        array.forEach((batch) => batch.vars.onEnter(batch));
      });
    },
  });
};

export {initAnimation};
