const slider2 = () => {
    const slider2 = document.querySelector('.sl2');
    const slides = [...document.querySelectorAll('.sl2-slide')];
    slider2.style.position ='relative';

    const buttonNext = document.createElement('img');
    buttonNext.src ='/img/Block10/arrowright.png';
    buttonNext.id = 'arrow-right';
    buttonNext.classList.add('slider2-btn');
    buttonNext.style.cssText =`position:absolute;right:20px;top:50%;cursor: pointer`;
    slider2.insertAdjacentElement('beforeend',buttonNext);
    const buttonPrev = document.createElement('img');
    buttonPrev.src ='/img/Block10/arrowleft.png';
    buttonPrev.id ='arrow-left';
    buttonPrev.classList.add('slider2-btn');
    buttonPrev.style.cssText ="position:absolute;left:20px;top:50%;cursor:pointer";
    slider2.insertAdjacentElement('afterbegin',buttonPrev);
    slides[0].classList.add('sl2-slide-active');

    const dots = document.createElement('ul');
    dots.classList.add('dots');
    slider2.insertAdjacentElement('beforeend',dots);

    for ( let i =0; i< slides.length; i++){
        let newDot = document.createElement('li');
        newDot.classList.add('dot');
        if ( i ===0 ) {
            newDot.classList.add('dot-active');
        }
        dots.appendChild(newDot);

    }
    const dot = document.querySelectorAll('.dot');

    let currentSlide = 0;
    let interval;
    let animateChange;
    let count = 0;

    const stepPrev = function(object, score){
        return ()=>{
            animateChange = requestAnimationFrame(stepPrev(object, score));
                count-=0.005;
                object.style.opacity = count+1;
            if (count >= -1){
                cancelAnimationFrame(animateChange);
                object.style.opacity=1;
            }

        };
    };
    const stepNext = function(object, score){
        return ()=>{
            animateChange = requestAnimationFrame(stepNext(object, score));
                count+=0.005;
                    object.style.opacity = count;
            if (count >= 1){
                cancelAnimationFrame(animateChange);
                object.style.opacity=1;
            }

        };
    };

    const prevSlide = (elem, index, strClass) => {
        // elem[index].style.opacity =1;
        count =0;
        animateChange = requestAnimationFrame(stepPrev(elem[index],1));
        elem[index].classList.remove(strClass);
        
    };
    const nextSlide = (elem, index, strClass) => {
        count=0;
        // elem[index].style.opacity =1;
        elem[index].classList.add(strClass);
        animateChange = requestAnimationFrame(stepNext(elem[index],0));
    };

    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide, 'sl2-slide-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide == slides.length){
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'sl2-slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
        const startSlide =(time = 3000) => {
            interval = setInterval(autoPlaySlide, time);

        };
        const stopSlide = () => {
            clearInterval( interval );

        };
        slider2.addEventListener( 'click', (event) =>{
            event.preventDefault();
            let target = event.target;
            if (!target.matches('.slider2-btn, .dot')){
                return;
            }

            prevSlide(slides, currentSlide, 'sl2-slide-active');
            prevSlide( dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')){
                currentSlide++;
            }
            else if (target.matches('#arrow-left')){
                currentSlide--;
            }
            else if (target.matches('.dot')){
                dot.forEach( (elem, index) => {
                    if (elem === target){
                        currentSlide =index;
                    }
                });
            }
            if (currentSlide >= slides.length){
                currentSlide =0;
            }
            if (currentSlide<0){
                currentSlide= slides.length -1;
            }
            nextSlide(slides, currentSlide, 'sl2-slide-active');
            nextSlide( dot, currentSlide, 'dot-active');
        });
        slider2.addEventListener( 'mouseover', (event) =>
        event.target.matches('.slider2-btn')||event.target.matches('.dot') ? stopSlide() : null);
        slider2.addEventListener( 'mouseout', (event) =>
        event.target.matches('.slider2-btn')||event.target.matches('.dot') ? startSlide() : null);
            
        startSlide(8000);
    
};



export default slider2;