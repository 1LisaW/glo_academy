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
    const startTime = Date.now();
    const dir = targetY > 0 ? 1:-1;
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
        }
        if (window.pageYOffset<window.innerHeight*0.5){
            document.querySelector('.two.two-mini').style.display ='none';
        }
        if(window.pageYOffset > window.innerHeight*0.8){
            const miniMenu = document.querySelector('.two.two-mini');
            miniMenu.style.display ='flex';
            miniMenu.querySelector('.container').style.display ='block';
        }
        
    };
   
    requestAnimationFrame(animationFrame); 

    
   
};   

export default getScrollToTarget;