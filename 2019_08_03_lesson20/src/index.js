'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
import 'formdata-polyfill';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import commandPhoto from './modules/commandPhoto';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import getValidUserData from './modules/getValidUserData';

elementClosest(window);
countTimer('20 july 2019');
toggleMenu();
togglePopup();
tabs();
slider();
commandPhoto();
calculator();
sendForm();
getValidUserData(); 