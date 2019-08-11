const togglePopupSupport = () =>{
    const popupWindowSupport = document.querySelector('.modal_support');
    popupWindowSupport.style.display = 'none';
    const buttonSupport = document.querySelector('.main-support');
    const closeBtnSupport = popupWindowSupport.querySelector('[aria-label="Close"]');
    const isMobile = () => {
        return navigator.userAgent.match(
            /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
        );
    };

    buttonSupport.addEventListener('click', (event) =>{
        const target = event.target;
        if(isMobile()&&(buttonSupport.closest('.active-mobile-support-btn')===null)){
            buttonSupport.classList.add('active-mobile-support-btn');
        }else{
            popupWindowSupport.style.cssText = "display:block;z-index:1000;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";
            buttonSupport.classList.remove('active-mobile-support-btn');
        }
    });
    document.addEventListener('click', (event)=>{
        const target = event.target;
        if ((target.closest('.modal-content')==null && !target.closest('.main-support'))||(target === closeBtnSupport)){
            popupWindowSupport.style.display = 'none';
        }
    });

};

export default togglePopupSupport;