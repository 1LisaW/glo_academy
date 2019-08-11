import showModalWindow from './showModalWindow.js';

const togglePopupSupport = () =>{
    const popupWindowSupport = document.querySelector('.modal_support');
    showModalWindow(popupWindowSupport,'support',true);
};

export default togglePopupSupport;