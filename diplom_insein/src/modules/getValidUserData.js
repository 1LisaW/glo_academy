const getValidUserData = () =>{
    const userName = document.querySelectorAll('[name=user_name]');
    userName.forEach(item => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яё ]/gi,'');
        });

    });
   
    const userPhone = document.querySelectorAll('[name=user_email]');
    userPhone.forEach( item => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            target.value = target.value.replace(/[а-яё]/ig,'');
        });
    });
};

export default getValidUserData;