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
    const btnMenu= document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = document.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li');
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
        target.closest(' ul>li')||
        (menu.classList.contains('active-menu')&& target.closest('menu')==null)){
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

        // const popupClose = document.querySelector('.popup-close');
        popupBtn.forEach((elem)=>{
            elem.addEventListener('click', ()=>{
                popupContent.style.top ='-100%';
                console.log(popup.style.top);
                popup.style.display='block';
                requestAnimationFrame(step);
                counter=-80;
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
        const dot = document.querySelectorAll('.dot');
        const slider = document.querySelector('.portfolio-content');

        let currentSlide = 0;

        const prevSlide = () => {
            slide[currentSlide].classList.remove('.portfolio-item-active');
        };
        const nextSlide = () => {
            slide[currentSlide].classList.add('.portfolio-item-active');
        }

        const autoPlaySlide = () => {
            prevSlide();
            currentSlide++;
            if (currentSlide == slide.length){
                currentSlide = 0;
            }
            nextSlide();
        };
            const startSlide =() => {

            };
            const stopSlide = () => {

            }
        
        
    }