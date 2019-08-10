const togglePopupSupport = () =>{
    const buttonTryProduct = document.querySelector('.main-support');
    const popupWindowSupport = document.querySelector('.modal_support');
    const closeBtnSupport = document.querySelectorAll('[aria-label="Close"]');
    buttonTryProduct.addEventListener('click', (event) =>{
        popupWindowSupport.style.cssText = "display:block;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";
        // popupWindow.style.top = `${(window.innerWidth-popupWindow.offsetWidth)/2}px`;
        // popupWindow.style.left = `${(window.innerHeight-popupWindow.offsetHeight)/2}px`;
    });
    closeBtnSupport[0].addEventListener('click', ()=>{
        popupWindowSupport.style.display = 'none';
    });

};

export default togglePopupSupport;