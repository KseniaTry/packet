const periodCards = document.querySelectorAll('[data-class="period-wrapper"]');
const periodTitles = document.querySelectorAll('[data-class="period-title-wrapper"]');
const lotteryCards = document.querySelectorAll('[data-class="lottery-card"]');
const extraInfos = document.querySelectorAll('[data-class="extra-info"]');

const addPeriodTitleColors = () => {
  periodTitles.forEach((title) => {
    const titleColor = title.dataset.color;
    title.style.color = titleColor;
  });
};

const addLotteryCardColors = () => {
  lotteryCards.forEach((card) => {
    const cardColor = card.dataset.color;
    card.style.backgroundImage = `linear-gradient(180deg, ${cardColor} 0%, #fff 100%)`;
  });
};

const addLotteryCardExtraInfoColors = () => {
  extraInfos.forEach((info) => {
    const cardColor = info.dataset.color;
    info.style.color = cardColor;
  });
};

const addLotteryPeriodCardColors = () => {
  periodCards.forEach((card) => {
    const cardColor = card.dataset.backgroundColor;
    card.style.backgroundImage = `linear-gradient(153deg, ${cardColor}, rgba(255, 255, 255, 0) 100%)`;
  });
};

const resetLotteryPeriodCardColors = () => {
  periodCards.forEach((card) => {
    card.style.backgroundImage = '';
  });
};

const addLotteryColors = () => {
  addPeriodTitleColors();
  addLotteryCardColors();
  addLotteryCardExtraInfoColors();
};

export {addLotteryColors, addLotteryPeriodCardColors, resetLotteryPeriodCardColors};
