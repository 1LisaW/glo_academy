const showModalWindow = (windowMod, name, checkMobile)=> {

    
        // const popupWindow = document.querySelector('.modal_offer');
        windowMod.style.display = 'none';
        const btnActivate = document.querySelectorAll(`.main-${name}`);
        const btnClose = windowMod.querySelector('[aria-label="Close"]');

        const isMobile = () => {
            return navigator.userAgent.match(
                /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
            );
        };
    
        btnActivate.forEach((item)=>{
            item.addEventListener('click', (event) =>{
                if (item.classList.contains('ignore-open-modal')){
                    return;
                }
                else if( checkMobile&&isMobile()&&(item.closest('.active-mobile-support-btn')===null)){
                    item.classList.add('active-mobile-support-btn');
                }else{
                    windowMod.classList.add('active-modal-window');
                    windowMod.style.cssText = "display:block;z-index:1000;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width:70%";
                    if (checkMobile){
                        item.classList.remove('active-mobile-support-btn');
                    }
                }
               
            });
        });
        document.addEventListener('click', (event)=>{
            const target = event.target;
            if ((target.closest('.modal-content')==null && !target.closest(`.main-${name}`))||(target === btnClose)){
                windowMod.style.display = 'none';
                windowMod.classList.remove('active-modal-window');
    
            }
        });

};

export default showModalWindow;