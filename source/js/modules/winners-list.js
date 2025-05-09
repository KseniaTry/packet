
import { getActiveOption } from "./new-custom-select";

const winnersListWrapper = document.querySelector('[data-class="winners-list-wrapper"]');
const winnersList = document.querySelector('[data-class="winners-list"]');
const customOptions = document.querySelectorAll('[data-class="custom-option"]');

const winners = [
  {
    id: 1,
    period: "02.08.23 — первый розыгрыш",
    isActive: false,
    weekNumber: 1,
    dates: "02.08.23 — 09.08.23",
    phoneNumbers: [
      { name: "Вия", nubmer: "7XXXXXX8474", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8433", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8573", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8483", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX9473", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2473", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8573", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX1473", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8443", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8473", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8343", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2373", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX6773", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX3673", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8456", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8438", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8274", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8427", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX8179", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX3894", prize: "Сертификат на покупки в «Пятёрочке»" }
    ]
  },
  {
    id: 2,
    period: "09.08.23 — второй розыгрыш",
    isActive: false,
    weekNumber: 2,
    dates: "09.08.23 — 15.08.23",
    phoneNumbers: [
      { name: "Петя", nubmer: "7XXXXXX9080", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX8978", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4590", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0939", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX1299", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX9043", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0293", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4920", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0923", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2311", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4444", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4009", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2390", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4288", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4030", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4930", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4003", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4040", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2300", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4334", prize: "Сертификат на покупки в «Пятёрочке»" }
    ]
  },
  {
    id: 3,
    period: "16.08.23 — третий розыгрыш",
    isActive: false,
    weekNumber: 3,
    dates: "16.08.23 — 22.08.23",
    phoneNumbers: [
      { name: "Петя", nubmer: "7XXXXXX9080", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX8978", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4590", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0939", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX1299", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX9043", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0293", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4920", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0923", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2311", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4444", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4009", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2390", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4288", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4030", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4930", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4003", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4040", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2300", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4334", prize: "Сертификат на покупки в «Пятёрочке»" }
    ]
  },
  {
    id: 4,
    period: "23.08.23 — четвертый розыгрыш",
    isActive: false,
    weekNumber: 4,
    dates: "23.08.23 — 29.08.23",
    phoneNumbers: [
      { name: "Петя", nubmer: "7XXXXXX9080", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX8978", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4590", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0939", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX1299", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX9043", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0293", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4920", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0923", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2311", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4444", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4009", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2390", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4288", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4030", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4930", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4003", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4040", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2300", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4334", prize: "Сертификат на покупки в «Пятёрочке»" }
    ]
  },
  {
    id: 5,
    period: "30.08.23 — пятый розыгрыш",
    isActive: false,
    weekNumber: 5,
    dates: "30.08.23 — 06.09.23",
    phoneNumbers: [
      { name: "Петя", nubmer: "7XXXXXX9080", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX8978", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4590", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0939", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX1299", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX9043", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0293", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4920", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0923", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2311", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4444", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4009", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2390", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4288", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4030", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4930", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4003", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4040", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2300", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4334", prize: "Сертификат на покупки в «Пятёрочке»" }
    ]
  },
  {
    id: 6,
    period: "07.09.23 — шестой розыгрыш",
    isActive: false,
    weekNumber: 6,
    dates: "07.09.23 — 13.09.23",
    phoneNumbers: [
      { name: "Петя", nubmer: "7XXXXXX9080", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX8978", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4590", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0939", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX1299", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX9043", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0293", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4920", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0923", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2311", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4444", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4009", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2390", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4288", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4030", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4930", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4003", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4040", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2300", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4334", prize: "Сертификат на покупки в «Пятёрочке»" }
    ]
  },
  {
    id: 7,
    period: "14.09.23 — седьмой розыгрыш",
    isActive: true,
    weekNumber: 7,
    dates: "14.09.23 — 20.09.23",
    phoneNumbers: [
      { name: "Петя", nubmer: "7XXXXXX9080", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX8978", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4590", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0939", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX1299", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX9043", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0293", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4920", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX0923", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2311", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4444", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4009", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX2390", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Петя", nubmer: "7XXXXXX4288", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4030", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4930", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4003", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4040", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX2300", prize: "Сертификат на покупки в «Пятёрочке»" },
      { name: "Вия", nubmer: "7XXXXXX4334", prize: "Сертификат на покупки в «Пятёрочке»" }
    ]
  }
]

function createWinnerRow(number) {
  return `<tr class="winners-list__data-wrapper" data-class="winner-row">
  <td class="winners-list__data" data-class="winner-name">${number.name}</td>
  <td class="winners-list__data" data-class="winner-phone">${number.nubmer}</td>
  <td class="winners-list__data" data-class="winner-prize">${number.prize}</td>`
}

function createWinnerRowsTemplate(numbers) {
  if (numbers.length === 0) {
    return `<p class="winners-list__no-winners-msg">Победители еще не определены</p>`
  }
  return `${numbers.map((number) => createWinnerRow(number)).join('') ?? ''}`
}

function createElement(template, position) {
  position.innerHTML = template;
}

// let activeOption = getActiveOption(customOptions);
// console.log(activeOption);

const renderWinnersList = (activeOption, winners) => {
  const winnersWeek = document.querySelector('[data-class="winners-week"]');
const winnersDates = document.querySelector('[data-class="winners-dates"]');
  const activeOptionData = winners.find((winner) => winner.id == activeOption.dataset.id);
  const phoneNumbers = activeOptionData.phoneNumbers;
  const week = activeOptionData.weekNumber;
  const dates = activeOptionData.dates;

  winnersWeek.textContent = `${week} неделя`;
  winnersDates.textContent = dates;

  createElement(createWinnerRowsTemplate(phoneNumbers), winnersList);
}

export { renderWinnersList }





