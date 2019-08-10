const togglePopupTry = () =>{
    const buttonTryProduct = document.querySelectorAll('.main-try');
    const popupWindow = document.querySelector('.modal_offer');
    const closeBtn = document.querySelectorAll('[aria-label="Close"]');
    buttonTryProduct.forEach((item)=>{
        item.addEventListener('click', (event) =>{
            if (item === buttonTryProduct[8]){
                return;
            }
        popupWindow.style.cssText = "display:block;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";
        });
    });
    closeBtn[1].addEventListener('click', ()=>{
        popupWindow.style.display = 'none';
    });

};

export default togglePopupTry;