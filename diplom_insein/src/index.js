import 'core-js/stable';
import 'nodelist-foreach-polyfill';
import 'element-closest-polyfill';
import 'formdata-polyfill';
import 'fetch-polyfill';
import 'ie-string-startswith-polyfill';
import 'request-animation-frame-polyfill';

import blockTextCorrector from './modules/blockTextCorrector.js';
import scrollToTarget from './modules/scrollToTarget.js';
import togglePopupTry from './modules/togglePopupTry.js';
import togglePopupSupport from './modules/togglePopupSupport.js';
import calculator from './modules/calculator.js';
import sliderCarusel from './modules/sliderCarusel.js';
import slider2 from './modules/Slider2.js';
import accordion from './modules/accordion.js';
import getValidUserData from './modules/getValidUserData.js';
import sendForm from './modules/sendForm.js';
import scrollDocumentSlider from './modules/scrollDocumentSlider.js';
import animateMoveToLink from './modules/animateMoveToLink.js';


blockTextCorrector();
scrollToTarget();
togglePopupTry();
togglePopupSupport();
calculator();
sliderCarusel();
slider2();
accordion();
getValidUserData();
sendForm();
scrollDocumentSlider();
animateMoveToLink();