const winnersListWrapper = document.querySelector('[data-class="winners-list-wrapper"]');
const winnersList = document.querySelector('[data-class="winners-list"]');
const noWinnersMsg = document.querySelector('[data-class="no-winners-msg"]');

function createWinnerRow(number) {
  return `<tr class="winners-list__data-wrapper" data-class="winner-row">
  <td class="winners-list__data" data-class="winner-name">${number.name}</td>
  <td class="winners-list__data" data-class="winner-phone">${number.nubmer}</td>
  <td class="winners-list__data" data-class="winner-prize">${number.prize}</td>`
}

function createWinnerRowsTemplate(numbers) {
  return `${numbers.map((number) => createWinnerRow(number)).join('') ?? ''}`
}

function createElement(template, position) {
  position.innerHTML = template;
}

const renderWinnersList = (activeOption, winners) => {
  const winnersWeek = document.querySelector('[data-class="winners-week"]');
  const winnersDates = document.querySelector('[data-class="winners-dates"]');
  const activeOptionData = winners.find((winner) => winner.id == activeOption.dataset.id);
  const phoneNumbers = activeOptionData.phoneNumbers;
  const week = activeOptionData.weekNumber;
  const dates = activeOptionData.dates;

  winnersWeek.textContent = `${week} неделя`;
  winnersDates.textContent = dates;

  if (phoneNumbers.length === 0) {
    winnersListWrapper.style.display = 'none';
    noWinnersMsg.style.display = "block";
  } else {
    winnersListWrapper.style.display = 'flex';
    noWinnersMsg.style.display = "none";
    createElement(createWinnerRowsTemplate(phoneNumbers), winnersList);
  }
}

const renderSearchResult = (winner) => {
  createElement(createWinnerRowsTemplate(winner), winnersList);
}

export { renderWinnersList, renderSearchResult }





