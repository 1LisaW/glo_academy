const togglePopupSupport = () =>{
    const buttonSupport = document.querySelector('.main-support');
    const popupWindowSupport = document.querySelector('.modal_support');
    const closeBtnSupport = document.querySelectorAll('[aria-label="Close"]');
    buttonSupport.addEventListener('click', (event) =>{
        popupWindowSupport.style.cssText = "display:block;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";
        
    });
    document.addEventListener('click', (event)=>{
        const target = event.target;
        if ((target.closest('.modal-content')==null && !target.closest('.main-support'))||(target === closeBtnSupport[0])){
            popupWindowSupport.style.display = 'none';
        }
    });

};

export default togglePopupSupport;