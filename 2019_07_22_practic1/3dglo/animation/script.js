let circle = document.querySelector('.object');
let start = document.querySelector('.move-object');
let reset = document.querySelector('.reload-object');
let count =0;
let secondClick = true;

let animationCircle;

let animateObject = function(){
    reset.style.display='none';
    animationCircle = requestAnimationFrame(animateObject);
    count++;
    circle.style.left = count+'px';
  if (secondClick||(count>700)){
      cancelAnimationFrame(animationCircle);
      reset.style.display='inline-block';
  }
  

};

start.addEventListener('click',function(){ 
    if (secondClick){
        
        secondClick= false;
        start.textContent ='Остановить анимацию';
    } else{
        
        secondClick = true;
        start.textContent ='Запустить анимацию';}
        animationCircle = requestAnimationFrame(animateObject);
    });
    reset.addEventListener('click',function(){ 
        circle.style.left=0+'px';
        count=0;
        });