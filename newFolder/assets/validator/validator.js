const Validator = function(options){

    const form = document.getElementById(options.id);
    const elementsForm =[...form.elements].filter(item =>
        item.tagName !=='BUTTON');
    const error = new Set(); 
    const pattern = {
        email:/^\w+@\w+\.\w+$/,
        phone:/^\+?[78]([()-]*\d){10}$/
    };
    const validatorMethod = {
        noEmpty(elem){
            if (elem.value.trim() ===''){
                return false;
            }
            return true;
        },
        pattern (elem, pattern){
            return pattern.test(elem.value);
        }
    };

     const isValid =(elem) => {
         const method =options.method[elem.id];
         if (method !==undefined){
             method.every( item =>{return validatorMethod[item[0]](elem, pattern[item[1]]);});
        }
         return true;
     };
    
     const checkIt= (event) =>{
         let target = event.target;
         if(isValid(target)){
             showSuccess(target);
             error.delete(target);
         } else{
             showError(target);
             error.add(target);
         }
     };   
    
        elementsForm.forEach((elem) =>{
            elem.addEventListener('change', checkIt);
        });

    const showError = (elem)=>{
        elem.classList.remove('validator_success');
        elem.classList.add('validator_error');
        
        if (!elem.nextElementSibling.classList.contains('validator-block-error')){
            const errorDiv = document.createElement('div');
            errorDiv.textContent ="Ошибка в этом поле";
            errorDiv.classList.add('validator-block-error');
            elem.insertAdjacentElement('afterend',errorDiv);
        }
        
    };
    const showSuccess=(elem) => {
        elem.classList.remove('validator_error');
        elem.classList.add('validator_success');
        if (elem.nextElementSibling.classList.contains('validator-block-error')){
            elem.nextElementSibling.remove();
        }
    };

    for (let key in options.pattern){
        pattern[key] =options.pattern[key];
    }

    form.addEventListener('submit', () => {
        elementsForm.forEach( (elem =>{
            checkIt({target: elem});
        }));
        if (error.size ){
            event.preventDefault();
        }
    });
};

