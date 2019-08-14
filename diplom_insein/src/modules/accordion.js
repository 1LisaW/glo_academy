const accordion = () => {
    if ( document.location.href.match(/faq\.html/gi) !== null){
        return;
    }
    const accordionBlock = document.querySelector('.js-ui-accordion');
    const accordionQuestions = [...accordionBlock.querySelectorAll('p')];
    const accordionAnswer = [...document.querySelectorAll('.js-ui-accordion>div')];
    accordionAnswer.forEach((item,index)=>{
       if (index === 0){
        item.classList.add('is-visible');
       } 
       item.classList.add('acc-content');
    });
    const show = function (elem) {

        const getHeight = function () {
            elem.style.display = 'block'; 
            var height = elem.scrollHeight + 'px'; 
            elem.style.display = ''; 
            return height;
        };
    
        const height = getHeight(); 
        elem.classList.add('is-visible'); 
        elem.style.height = height; 
    
        window.setTimeout(function () {
            elem.style.height = '';
        }, 350);
    
    };
    
    const hide = function (elem) {
    
        elem.style.height = elem.scrollHeight + 'px';
    
        window.setTimeout(function () {
            elem.style.height = '0';
        }, 1);
    
        window.setTimeout(function () {
            elem.classList.remove('is-visible');
        }, 350);
    
    };
    
    
    

    accordionBlock.addEventListener('click',(event) =>{
        const target = event.target;
        const index = accordionQuestions.findIndex(item=> target===item);
        if(index!== -1){
            accordionAnswer.forEach((item, i)=>{
                if(i === index){
                    item.classList.remove('d-none');
                    show(item);
                }else{
                
                    // item.classList.add('d-none');
                    hide(item);
                }
            });
            
        }
    });
};

export default accordion;