const sliderCarusel = () => {
    const slider = document.querySelector('.sl');
    const slides = [...document.querySelectorAll('.sl .sl-slide')];
    const buttonNext = document.createElement('img');
    buttonNext.src ='./img/Block10/arrowright.png';
    buttonNext.style.cssText =`position:absolute;left:${document.documentElement.clientWidth-20}px`;
    slider.insertAdjacentElement('beforeend',buttonNext);
    const buttonPrev = document.createElement('img');
    buttonPrev.src ='./img/Block10/arrowleft.png';
    buttonPrev.style.cssText ="position:absolute;left:20px";
    slider.insertAdjacentElement('afterbegin',buttonPrev);

    slider.style.overflow = 'hidden';
    slider.style.justifyContent ='flex-start';
    let sizeCarusel = 6;

    const updateWindowSize =()=> {
        if (document.documentElement.clientWidth>1024){
            
            slides.forEach( item => item.style.flex = "1 0 16.6%");
        } else{
            sizeCarusel =3;
            slides.forEach( item => item.style.flex = "1 0 33.3%");
        }
        buttonNext.style.cssText =`position:absolute;left:${document.documentElement.clientWidth-20}px`;
    };
    updateWindowSize();
    

    window.addEventListener("resize", ()=>{
        updateWindowSize();
    });
    const diffStep = Math.ceil(slider.clientWidth/sizeCarusel);
    const delayRemoveSlide = (direction)=>{
        return ()=>{
            if (direction == 'next'){
                const firstSlide = slides.shift();

                const elem = slider.removeChild(firstSlide);
                slider.insertAdjacentElement('beforeend',elem);
                slides.push(firstSlide);
                slides.forEach((item) =>{
                    item.style.transform =`translateX(-${0}px)`;
                    item.style.transition= 'none';
                });
            } else{
                const lastSlide = slides.pop();

                const elem = slider.removeChild(lastSlide);
                slider.insertAdjacentElement('afterbegin',elem);
                slides.unshift(lastSlide);
                slides.forEach((item) =>{
                    item.style.transform =`translateX(-${diffStep}px)`;
                    item.style.transition= 'none';
                });
            }

        };
    };
    buttonNext.addEventListener('click',()=>{
        slides.forEach((item) =>{
            item.style.transform =`translateX(-${diffStep}px)`;
            item.style.transition= 'transform 1000ms';
        });
        setTimeout(delayRemoveSlide('next'),600);
    });    
    buttonPrev.addEventListener('click',()=>{
        delayRemoveSlide('prev')();
        setTimeout(() =>{
            slides.forEach( (item) =>{
                item.style.transform =`translateX(+${0}%)`;
                 item.style.transition= 'transform 1000ms';
            });
        },100);
    });
};

export default sliderCarusel;