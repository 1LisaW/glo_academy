const getScroll = (targetSelector) => {
    const target = document.querySelector(targetSelector);
    // target.style.height = document.body.clientHeight;
    // target.style.width = document.body.clientWidth;
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
            window.cancelAnimationFrame(animationFrame);
        }
    };
    requestAnimationFrame(animationFrame); 
};   

export default getScroll;