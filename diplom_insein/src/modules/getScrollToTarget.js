const getScrollToTarget = (targetSelector) => {
    const target = document.querySelector(targetSelector);
    target.style.height = document.body.clientHeight;
    target.style.width = document.body.clientWidth;
    target.style.maxHeight = document.body.clientHeight;
    if (targetSelector.length === 1 || target == null ){
        return;
    }
    
    const targetY = target.getBoundingClientRect().top;
    const startY =  window.pageYOffset;
    const totalDiffY = Math.abs(targetY);
    // Math.abs(targetY - startY);
    const startTime = Date.now();
    const dir = targetY > 0 ? 1:-1;
    // targetY > startY ? 1 : -1;
    const pxInMs = 2;

    const animationFrame = () => {
        const diffTime = Date.now() - startTime;
        const diffY = diffTime * pxInMs;
        const y = startY + dir * diffY;
        window.scrollTo(startY,y);
        if ( diffY < totalDiffY){
            requestAnimationFrame(animationFrame);
        } else {
            
            window.scrollTo(startY, targetY+startY);
            // window.cancelAnimationFrame(animationFrame);
        }
        
    };
   
    requestAnimationFrame(animationFrame); 
    if(startY+targetY > window.innerHeight*0.8){
        const miniMenu = document.querySelector('.two.two-mini');
        miniMenu.style.display ='block';
        miniMenu.style.maxHeight ='30px';
    }
   
};   

export default getScrollToTarget;