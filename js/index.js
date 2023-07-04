import {SliderBr} from './slider.js';

// const slider = document.querySelector('[data-slider]');
const sliderWrp = document.querySelector('[data-wrp-slider]');

let sliderBr = new SliderBr('[data-slider]', '[data-wrp-slider]', '[data-btn-prev]', '[data-btn-next]', '[data-img]' );
sliderBr.sliderMove();