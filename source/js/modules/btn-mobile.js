const agreementInputs = document.querySelectorAll('[data-class="agreement-input"]');

const breakpoint = window.matchMedia(`(max-width: ${767}px)`);

const mobileButtonColorChange = () => {
  agreementInputs.forEach((input) => {
    input.addEventListener('change', (evt) => {
      const form = evt.target.closest('FORM');
      const button = form.querySelector('.btn');
      button.removeAttribute('disabled');
      button.classList.toggle('input-checked');
    });
  });
};

const makeButtonActive = () => {
  agreementInputs.forEach((input) => {
    input.addEventListener('change', (evt) => {
      const form = evt.target.closest('FORM');
      const button = form.querySelector('.btn');
      button.removeAttribute('disabled');
    });
  });
}

const breakpointChecker = () => {
  if (breakpoint.matches) {
    mobileButtonColorChange();
  } else {
    makeButtonActive();
    return;
  }
};

const initButtonColorChange = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export { initButtonColorChange };
