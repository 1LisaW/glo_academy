const togglePopup = ()=>{
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const popupBtn = document.querySelectorAll('.popup-btn');
    let counter;
    const step = () => {
        counter++;
        popupContent.style.top = counter*2+'%';
      if (counter<10){
          requestAnimationFrame(step);
      }
      
    
    };
    const isMobile = () => {
        return navigator.userAgent.match(
            /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
        );
    };
    popupBtn.forEach((elem)=>{
        elem.addEventListener('click', ()=>{
            if (!isMobile()){
            popupContent.style.top ='-100%';
            popup.style.display='block';
            requestAnimationFrame(step);
            counter=-80;}
            else{
                popup.style.display='block';
            }
        });
    });
    popup.addEventListener('click',(event)=>{
        let target = event.target;
        if (target.classList.contains('popup-close')){
            popup.style.display ='none';
        } 
        else{
            target = target.closest('.popup-content');
            if (!target){
                popup.style.display = 'none';
            }
            
        }
    });
};

export default togglePopup;