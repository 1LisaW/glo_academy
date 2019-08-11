import showModalWindow from './showModalWindow.js';

const togglePopupTry = () =>{
    const popupWindow = document.querySelector('.modal_offer');
    const btnQwestions = document.querySelector(`[onclick="location.href='faq.html'"]`);
    btnQwestions.classList.add('ignore-open-modal');

    showModalWindow(popupWindow,'try',false);
    document.addEventListener('DOMContentLoaded',()=>{
        setTimeout(()=>{
            if (document.querySelector('.active-modal-window') === null){
                popupWindow.classList.add('active-modal-window');
                popupWindow.style.cssText = "display:block;z-index:1000;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";

            }
        },60000);
    });
    let isBtnClicked = false;
    document.addEventListener('click', (event) =>{
        const target= event.target;
        if (target.tagName === 'BUTTON'){
            isBtnClicked = true;
        }
    });
    document.addEventListener('scroll',()=>{
        
            if (!isBtnClicked&&(document.body.clientHeight <= pageYOffset+window.innerHeight)){
                popupWindow.classList.add('active-modal-window');
                popupWindow.style.cssText = "display:block;z-index:1000;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";

            }
        
    },{passive:true});
};

export default togglePopupTry;