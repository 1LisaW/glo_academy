window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    //Timer
    function countTimer(deadline){
        let useGMT = false;
        let diff = new Date().getTimezoneOffset()*60000;
        
        let timerHours = document.querySelector('#timer-hours');
        let timerMinutes = document.querySelector('#timer-minutes');
        let timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop =new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            if (useGMT){
                getGTMTime(dateStop, dateNow);
                dateNow = new Date().getTime()+diff;
                dateStop =new Date(dateNow).setHours(24,0,0);
            }
            
            let seconds = (dateStop < dateNow)? 0 : Math.floor(timeRemaining % 60);
            let minutes = (dateStop < dateNow)? 0 : Math.floor(( timeRemaining / 60 ) % 60);
            let hours = (dateStop < dateNow)? 0 : Math.floor( timeRemaining / 60/ 60 );
            if (seconds==0 && minutes==0 &&Math.floor((dateNow+diff)/60/60/1000)==0){
                useGMT = true;
            }
            return  { timeRemaining, hours, minutes, seconds};
}
        function getGTMTime(dateStop,dateNow){
             
             return;
        }
        function updateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent = timer.hours > 9 ? timer.hours : '0' + timer.hours;
            timerMinutes.textContent = timer.minutes > 9 ? timer.minutes : '0' + timer.minutes;
            timerSeconds.textContent = timer.seconds > 9 ? timer.seconds : '0' + timer.seconds;
        }
        let timerId = setInterval(updateClock,1000);
    }
    countTimer('20 july 2019');
    // setInterval(countTimer, 1000)
});

const toggleMenu =()=>{
    // const btnMenu= document.querySelector('.menu');
    const menu = document.querySelector('menu');
    // const closeBtn = document.querySelector('.close-btn');
    // const menuItems = menu.querySelectorAll('ul>li');
    const handlerMenu = ()=>{
        menu.classList.toggle('active-menu');
        // if (!menu.style.transform || menu.style.transform === 'translate(-100%)'){
        //     menu.style.transform = 'translate(0)';    
        // }else{
        //     menu.style.transform = 'translate(-100%)';
        // }
    };
    document.addEventListener('click', (event)=>{
        let target = event.target;
        if ( target.closest('.menu')|| target.classList.contains('close-btn')||
        target.closest('menu ul>li')||
        (menu.classList.contains('active-menu'))){
            menu.classList.toggle('active-menu');
        } 


    });
    // btnMenu.addEventListener('click',handlerMenu);
    // closeBtn.addEventListener('click', handlerMenu);
    // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
};
    toggleMenu();



    const togglePopup = ()=>{
        const popup = document.querySelector('.popup');
        const popupContent = document.querySelector('.popup-content');
        const popupBtn = document.querySelectorAll('.popup-btn');
        let counter;
        function step (){
            counter++;
            popupContent.style.top = counter*2+'%';
          if (counter<10){
              requestAnimationFrame(step);
          }
          
        
        }
        function isMobile() {
            return navigator.userAgent.match(
                /Android|iPhone|iPad|iPod|kindle|Tablet|BlackBerry|mobile|Windows Phone|Opera Mini/i
            );
        }
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
            // popup.style.display = 'none';
        });
    };

function scrollToTarget(targetSelector){
    if (targetSelector.length === 1 || document.querySelector(targetSelector) == null ){
        return;
    }
    const targetY = document.querySelector(targetSelector).getBoundingClientRect().top;
    const startY =  window.pageYOffset;
    const totalDiffY = Math.abs(targetY - startY);
    const startTime = Date.now();
    const dir = targetY > startY ? 1 : -1;
    const pxInMs = 2;

    const animationFrame= function(){
        const diffTime = Date.now() - startTime;
        const diffY = diffTime * pxInMs;
        const y = startY + dir * diffY;
        window.scrollTo(0,y);
        if ( diffY < totalDiffY){
            requestAnimationFrame(animationFrame);
        } else {
            window.scrollTo(0, targetY);
        }
    };
    requestAnimationFrame(animationFrame); 
}   

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));

document.addEventListener('click',(event)=>{
    let target = event.target.closest('a');
    if (target && target.getAttribute('href').startsWith('#')){
        event.preventDefault();
        scrollToTarget(target.getAttribute('href'));
    }
});

    togglePopup();
    // tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = document.querySelectorAll('.service-header-tab');
         const tabContent = document.querySelectorAll('.service-tab');
         const toggleTabContent = (index) =>{
             for (let i=0; i< tabContent.length; i++){
                 if (index === i){
                     tab[i].classList.add('active');
                     tabContent[i].classList.remove('d-none');
                 } else{
                    tab[i].classList.remove('active');
                     tabContent[i].classList.add('d-none');
                 }
             }
         };
        tabHeader.addEventListener('click', (event) =>{
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target){
                tab.forEach((item, i)=>{
                    if (item === target){
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
      //слайдер

      const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item');
        const btn = document.querySelectorAll('.portfolio-btn');
        const portfolioDots = document.querySelector('.portfolio-dots');
        for ( let i =0; i< slide.length; i++){
            let newDot = document.createElement('li');
            newDot.classList.add('dot');
            if ( i ===0 ) {
                newDot.classList.add('.dot-active');
            }
            portfolioDots.appendChild(newDot);

        }
        const dot = document.querySelectorAll('.dot');
        const slider = document.querySelector('.portfolio-content');

        let currentSlide = 0;
        let interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide == slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
            const startSlide =(time = 3000) => {
                interval = setInterval(autoPlaySlide, time);

            };
            const stopSlide = () => {
                clearInterval( interval );

            };
            slider.addEventListener( 'click', (event) =>{
                event.preventDefault();
                let target = event.target;
                if (!target.matches('.portfolio-btn, .dot')){
                    return;
                }

                prevSlide(slide, currentSlide, 'portfolio-item-active');
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
                if (currentSlide >= slide.length){
                    currentSlide =0;
                }
                if (currentSlide<0){
                    currentSlide= slide.length -1;
                }
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide( dot, currentSlide, 'dot-active');
            });
            slider.addEventListener( 'mouseover', (event) =>{
                if (event.target.matches('.portfolio-btn')||event.target.matches('.dot')){
                    stopSlide();
                }

            });
            slider.addEventListener( 'mouseout', (event) =>{
                if (event.target.matches('.portfolio-btn')||event.target.matches('.dot')){
                    startSlide();
                }
            });
            startSlide(1500);
        
    };
    
    slider();

    const commandPhoto = () => {
        const blockCommand = document.querySelector('.command');
        function getChangeImg(target){
            let getChangedItem = target.src;
            target.src = target.dataset.img;
            target.dataset.img = getChangedItem;
        }
        blockCommand.addEventListener('mouseover', (event) =>{
            const target = event.target;
            if (target.matches('.command__photo')){
               getChangeImg(target);
            }
        });
        blockCommand.addEventListener('mouseout', (event) =>{
            const target = event.target;
            if (target.matches('.command__photo')){
               getChangeImg(target);
            }
        });
    };

    commandPhoto();
// калькулятор
    const calculator = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const calcSquare = document.querySelector('.calc-square');
        const calcDay = document.querySelector('.calc-day');
        const calcCount =document.querySelector('.calc-count');
        const totalValue = document.getElementById('total');
        
        const countSum = () => {
            // cancelAnimationFrame(animation);
            let total =0;
            let countValue =1;
            let dayValue =1;
            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value;
            if (calcCount.value > 1){
                countValue += (calcCount.value-1)/10;

            }
            if (calcDay.value && calcDay.value <5){
                dayValue*=2;
            } else if (calcDay.value && calcDay.value <10){
                dayValue*=1.5;
            }

            if (typeValue && squareValue){
                total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
            } else{
            total = 0;
            }
            const animation = function(){
                let totalNumber = +document.getElementById('total').textContent;
                const counter = totalValue.textContent;
                const iter = Math.ceil(Math.abs(totalNumber-total)/20);

                if (Math.abs(total - totalNumber)<1){
                    totalNumber = total;
                    totalValue.textContent = +total;
                }
                if (total> totalNumber){
                    totalValue.textContent = +counter + iter;
                    requestAnimationFrame(animation);
                } else if (total < totalNumber){
                    totalValue.textContent = +counter- iter;
                    requestAnimationFrame(animation);
                }
                
            };
            requestAnimationFrame(animation);
        };
        calcBlock.addEventListener('change', (event) =>{
            
            const target = event.target;
            if (target === calcType || target === calcSquare || target === calcDay || target === calcCount){
                // totalValue.textContent = calcType
                countSum(price);
            }
        });

        calcBlock.addEventListener('input', (event) =>{
            const target = event.target;
            if (target.matches('input.calc-item')){
                target.value.replace(/[^\d]/g,'');

            }
        });
    };
    // const animationFrame= function(){
    //     const diffTime = Date.now() - startTime;
    //     const diffY = diffTime * pxInMs;
    //     const y = startY + dir * diffY;
    //     window.scrollTo(0,y);
    //     if ( diffY < totalDiffY){
    //         requestAnimationFrame(animationFrame);
    //     } else {
    //         window.scrollTo(0, targetY);
    //     }
    // };
    // requestAnimationFrame(animationFrame); 

    calculator();