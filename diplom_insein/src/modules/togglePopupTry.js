const togglePopupTry = () =>{
    const buttonTryProduct = document.querySelector('.main-try');
    const popupWindow = document.querySelector('.modal_offer');
    const closeBtn = document.querySelectorAll('[aria-label="Close"]');
    buttonTryProduct.addEventListener('click', (event) =>{
        popupWindow.style.cssText = "display:block;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";
        // popupWindow.style.top = `${(window.innerWidth-popupWindow.offsetWidth)/2}px`;
        // popupWindow.style.left = `${(window.innerHeight-popupWindow.offsetHeight)/2}px`;
    });
    closeBtn[1].addEventListener('click', ()=>{
        popupWindow.style.display = 'none';
    });

};

export default togglePopupTry;