 // send-ajax-form
 const sendForm = () =>{
    const errorMessage ='Произошла ошибка при отправке сообщения';
    const loadMessage ='Идет загрузка...';
    const successMessage ='Сообщение отправлено.С вами свяжутся в ближайшее время.';
    const formPopupSupport = document.querySelector('.modal_support form');
    const formPopupTry = document.querySelector('.modal_offer form');
    const buttonTry = formPopupTry.querySelector('button');
    buttonTry.classList.add('ignore-open-modal');
    const buttonSupport = formPopupSupport.querySelector('button');
    buttonSupport.classList.add('ignore-open-modal');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    let form;

    document.body.addEventListener('submit', (event) =>{
        if (event.target === formPopupSupport){
            form = formPopupSupport;
        }
        if (event.target === formPopupTry){
            form = formPopupTry;
        }
        event.preventDefault();
        form.appendChild(statusMessage);
        const formData = new FormData(form);
        let body = {};
        for (let val of formData.entries()){
            body[val[0]] = val[1];
        }
        postData(body)
            .then( (response) =>{
                if (response.status !==200){
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                const inputs = document.querySelectorAll('input');
                const textarea = document.querySelectorAll('textarea');
                inputs.forEach(item => {
                    item.value = '';
                });
                textarea.forEach(item =>{
                    item.value ='';
                });
            })
            .catch( (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
                
            });
    });
    const postData = (body) => {
        return fetch('./server.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
   
};

export default sendForm;