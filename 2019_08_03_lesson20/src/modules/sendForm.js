 // send-ajax-form
 const sendForm = () =>{
    const errorMessage ='Что-то пошло не так';
    const loadMessage ='Загрузка...';
    const successMessage ='Спасибо! Мы с вами свяжемся';
    const formHeader = document.getElementById('form1');
    const formFooter = document.getElementById('form2');
    const formPopup = document.getElementById('form3');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    let form;

    document.body.addEventListener('submit', (event) =>{
        if (event.target === formHeader){
            form = formHeader;
        }
        if (event.target === formFooter){
            form = formFooter;
        }
        if (event.target === formPopup){
            form = formPopup;
            form.style.color = 'white';
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
                inputs.forEach(item => {
                    item.value = '';
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