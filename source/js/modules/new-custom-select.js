import { renderWinnersList } from "./winners-list";

// кастомный селект
const openCustomSelect = (customInput, customSelectWrapper, customSelect) => {
  customInput.addEventListener('click', () => {
    customSelectWrapper.classList.toggle('is-opened');
    customSelect.classList.toggle('is-opened');
  });
};

const closeCustomSelect = (customSelectWrapper, customSelect) => {
  customSelectWrapper.classList.remove('is-opened');
  customSelect.classList.remove('is-opened');
};

const closeCustomSelectOnPageClick = (customSelectWrapper, customSelect, dataClass) => {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.closest(dataClass) === null) {
      customSelectWrapper.classList.remove('is-opened');
      customSelect.classList.remove('is-opened');
    }
  });
};

const getActiveOption = (options) => {
  let activeOption;

  options.forEach((option) => {
    if (option.dataset.active === 'is-active') {
      activeOption = option;
    }
  })
  return activeOption;
}

const createCustomSelect = (customInput, customSelectWrapper, customSelect, dataClass, customOptions, winners) => {
  openCustomSelect(customInput, customSelectWrapper, customSelect);
  closeCustomSelectOnPageClick(customSelectWrapper, customSelect, dataClass);

  // отрисовка текущего списка (по умолчанию выбрана первая неделя)
  const activeOption = getActiveOption(customOptions);
  renderWinnersList(activeOption, winners);

  // переключение options в кастомном селекте + перерисовка списки исходя из выбранного option
  customSelect.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'DIV') {
      return;
    }
    customInput.value = evt.target.textContent;

    // изменение дата атрибута выбранного (=активного) option
    const activeOption = getActiveOption(customOptions);
    activeOption.dataset.active = 'not-active';
    evt.target.dataset.active = 'is-active';
    const newActiveOption = getActiveOption(customOptions);

    // закрытие селекта по клику на input или по клику на область вне input
    closeCustomSelect(customSelectWrapper, customSelect);
    closeCustomSelectOnPageClick(customSelectWrapper, customSelect, dataClass);

    // рендеринг списка номеров победителей
    renderWinnersList(newActiveOption, winners);
  });
};

export { createCustomSelect, getActiveOption };
