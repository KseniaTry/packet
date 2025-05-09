import { createCustomSelect } from "./custom-select-2";

const customSelectWrapper = document.querySelector(('[data-class="custom-select"]'));
const customInput = document.querySelector('[data-class="custom-input"]');
const customSelect = document.querySelector('[data-class="custom-select"]');
const customSelectWrapperClass = '.modal__custom-select-wrapper';


createCustomSelect(customInput, customSelectWrapper, customSelect)
