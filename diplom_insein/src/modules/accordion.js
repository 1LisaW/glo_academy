const accordion = () => {
    const accordionBlock = document.querySelector('.js-ui-accordion');
    const accordionQuestions = [...accordionBlock.querySelectorAll('p')];
    const accordionAnswer = [...document.querySelectorAll('.js-ui-accordion>div')];

    accordionBlock.addEventListener('mouseover',(event) =>{
        const target = event.target;
        const index = accordionQuestions.findIndex(item=> target===item);
        if(index!== -1){
            accordionAnswer.forEach((item, i)=>{
                if(i === index){
                    item.classList.remove('d-none');
                }else{
                    item.classList.add('d-none');
                }
            });
            
        }
    });
};

export default accordion;