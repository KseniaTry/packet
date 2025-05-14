import {createCustomSelect} from '../new-custom-select';
import {winners} from './winners-mock';

const customSelectWrapper = document.querySelector(('[data-class="custom-select-wrapper"]'));
const customInput = document.querySelector('[data-class="custom-input"]');
const customSelect = document.querySelector('[data-class="custom-select"]');
const customSelectWrapperClass = '[data-class="custom-select-wrapper"]';
const customOptions = document.querySelectorAll('[data-class="custom-option"]');

const initForm = () => {
  if (customSelectWrapper === null) {
    return;
  }
  createCustomSelect(customInput, customSelectWrapper, customSelect, customSelectWrapperClass, customOptions, winners);
};

export {initForm};
