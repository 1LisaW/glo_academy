import showModalWindow from './showModalWindow.js';

const togglePopupTry = () =>{
    const popupWindow = document.querySelector('.modal_offer');
    if ( popupWindow === null){
        return;
    }
    const btnQwestions = document.querySelector(`[onclick="location.href='faq.html'"]`);
    btnQwestions.classList.add('ignore-open-modal');

    showModalWindow(popupWindow,'try',false);
    document.addEventListener('DOMContentLoaded',()=>{
        setTimeout(()=>{
            if (document.querySelector('.was-active-modal-window') === null){
                popupWindow.classList.add('was-active-modal-window');
                popupWindow.style.cssText = `display:block;z-index:1000;position: fixed;top: 50%;
                                            left: 50%;transform: translate(-50%, -50%);width:70%`;

            }
        },60000);
    });
    let stopListenerScroll = false;
    document.addEventListener('click', (event) =>{
        const target= event.target;
        if (target.tagName === 'BUTTON'){
            stopListenerScroll = true;
        }
    });
    document.addEventListener('scroll',(event)=>{
        
            if (!stopListenerScroll&&(document.body.clientHeight <= window.pageYOffset+window.innerHeight)){
                stopListenerScroll = true;
                popupWindow.classList.add('was-active-modal-window');
                popupWindow.style.cssText = `display:block;z-index:1000;position: fixed;top: 50%;
                                            left: 50%;transform: translate(-50%, -50%);width:70%`;

            }
        
    },{passive:true});
};

export default togglePopupTry;