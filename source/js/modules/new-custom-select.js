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

const closeCustomSelectOnPageClick = (customSelectWrapper, customSelect, className) => {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.closest(className) === null) {
      customSelectWrapper.classList.remove('is-opened');
      customSelect.classList.remove('is-opened');
    }
  });
};

const createCustomSelect = (customInput, customSelectWrapper, customSelect, className) => {
  openCustomSelect(cityInput, customSelectWrapper, customSelect);
  closeCustomSelectOnPageClick(customSelectWrapper, customSelect, className);

  customSelect.addEventListener('click', (evt) => {
    if (evt.target.tagName !== 'DIV') {
      return;
    }
    customInput.value = evt.target.textContent;
    closeCustomSelect(customSelectWrapper, customSelect);
    closeCustomSelectOnPageClick(customSelectWrapper, customSelect, className);
  });
};

export { createCustomSelect };
