const togglePopupTry = () =>{
    const popupWindow = document.querySelector('.modal_offer');
    popupWindow.style.display = 'none';
    const buttonTryProduct = document.querySelectorAll('.main-try');
    const closeBtn = popupWindow.querySelector('[aria-label="Close"]');
    const btnQwestions = document.querySelector(`[onclick="location.href='faq.html'"]`);
    btnQwestions.classList.add('ignore-open-modal');

    buttonTryProduct.forEach((item)=>{
        item.addEventListener('click', (event) =>{
            if (item.classList.contains('ignore-open-modal')){
                return;
            }
        popupWindow.style.cssText = "display:block;position: fixed;z-index:1000;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";
        });
    });
    closeBtn.addEventListener('click', ()=>{
        popupWindow.style.display = 'none';
    });

};

export default togglePopupTry;