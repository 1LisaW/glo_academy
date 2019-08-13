import getScrollToTarget from './getScrollToTarget.js';

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));

const scrollToTarget =()=>{
document.addEventListener('click',(event)=>{
    let target = event.target.closest('a');
    if (target && target.getAttribute('href')&&target.getAttribute('href').startsWith('#')){
        event.preventDefault();
        getScrollToTarget(target.getAttribute('href'));
    }
    
});
};

export default scrollToTarget;