import { getActiveOption } from '../new-custom-select';
import { winners } from './winners-mock';
import { renderSearchResult, renderWinnersList } from './winners-list';

const phoneSearchInput = document.getElementById('phone-search');
const searchButton = document.querySelector('[data-class="search-button"]');
const customOptions = document.querySelectorAll('[data-class="custom-option"]');
const searchText = document.querySelector('[data-class="search-text"]');
const activeOption = getActiveOption(customOptions);
const REGEX_PHONE = /[^0-9]/;

// валидация
const validatePhone = () => {

  phoneSearchInput.addEventListener('input', (evt) => {
    const phoneInputValue = evt.target.value;
    const phoneInputLength = String(phoneSearchInput.value).length;

    if (phoneInputLength < 4) {
      searchText.textContent = 'Введите последние 4 цифры номера телефона';
      searchText.style.color = '#989898';
      phoneSearchInput.style.color = '#0088FE';
      renderWinnersList(activeOption, winners);
    }

    // очистка поля, если введены буквы и(или) символы
    if (REGEX_PHONE.test(phoneInputValue)) {
      phoneSearchInput.value = '';
    }

    // проверка соответствия введенного значения регулярному выражению + проверка длины введенного значения
    if (!REGEX_PHONE.test(phoneInputValue) && phoneInputLength < 4) {
      phoneSearchInput.setCustomValidity('Введите 4 цифры');
    } else {
      phoneSearchInput.setCustomValidity('');
    }
  });
};

const initPhoneSearch = () => {
  if (phoneSearchInput === null) {
    return;
  }

  if (phoneSearchInput.value = "") {
    searchText.style.color = '#989898';
    searchText.textContent = 'Введите последние 4 цифры номера телефона';
  }

  const activeOptionData = winners.find((winner) => winner.id == activeOption.dataset.id);
  const winnersList = activeOptionData.phoneNumbers;
  const activeWinnersShortNumbers = winnersList.map((winner) => winner.nubmer.slice(-4));

  searchButton.addEventListener('click', (evt) => {
    const searchResult = activeWinnersShortNumbers.find((shortNumber) => shortNumber === phoneSearchInput.value);
    const phoneInputLength = String(phoneSearchInput.value).length;

    if (!searchButton.classList.contains('is-opened')) {
      if (phoneInputLength < 4) {
        return;
      } else {
        if (searchResult != undefined) {
          const resultNumberIndex = activeWinnersShortNumbers.indexOf(searchResult);
          const resultWinnerInfo = [];
          resultWinnerInfo.push(winnersList[resultNumberIndex])
          renderSearchResult(resultWinnerInfo);
          searchButton.classList.add('is-opened');
          searchButton.classList.add('correct'); // для перекраски цвета текста в стилях
        } else {
          searchText.textContent = 'Номер не найден';
          searchText.style.color = '#FF5200';
          phoneSearchInput.style.color = '#FF5200';
          searchButton.classList.add('is-opened');
          searchButton.classList.add('incorrect'); // для перекраски цвета текста в стилях
        }
      }
    } else {
      phoneSearchInput.value = "";
      searchText.style.color = '#989898';
      searchText.textContent = 'Введите последние 4 цифры номера телефона';
      searchButton.classList.remove('is-opened');
      searchButton.classList.remove('incorrect');
      searchButton.classList.remove('correct');
    }

    evt.preventDefault();
  });

  validatePhone();
};

export { initPhoneSearch };
