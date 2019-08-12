import getScrollToTarget from './getScrollToTarget.js';

const scrollDocumentSlider =()=>{

    document.querySelector('section.three').id ='three';
    const arrOfSlides = [];
    // let localheight =0;
    const arrOfId =['main','menu','four','five','six','seven','eight','nine','ten','eleven','twelve','map'];
    arrOfId.forEach( (item,index) =>{
        arrOfSlides.push({ 'elem': document.getElementById(item), 
                            'idTo': `#${index === arrOfId.length-1 ? '' : arrOfId[index+1]}`, 
                        });
    });
    let direction ='';
    
    let once = 0;
    document.addEventListener('wheel',(event)=>{

        const checkOnScroll = () => {
            const delta = parseInt(event.wheelDelta || -event.detail);
            if (delta > 0) {
                direction='top';
    
            } else if (delta < 0) {
                direction='down';
            }
        };
        checkOnScroll();

        const startScrollPoint = window.pageYOffset;
        const deltaWin =30;
        const index = arrOfSlides.findIndex( item => 
            item.elem.getBoundingClientRect().bottom+ window.pageYOffset -deltaWin> startScrollPoint&& 
            item.elem.getBoundingClientRect().top+window.pageYOffset  +deltaWin< startScrollPoint);
        if (direction === 'down' && index < arrOfSlides.length-1 && index>=0 
        ){
            getScrollToTarget(arrOfSlides[index].idTo);
            
        }
        if (direction === 'top'){
            if (window.pageYOffset<=window.innerHeight){
                document.querySelector('.two.two-mini').style.display ='none';
            }
        }
        
    });
    document.addEventListener('DOMContentLoaded',()=>{ 
        if(window.pageYOffset > window.innerHeight*0.8){
            const miniMenu = document.querySelector('.two.two-mini');
            miniMenu.style.display ='block';
            miniMenu.style.maxHeight ='30px';
        }
    });
};

export default scrollDocumentSlider;