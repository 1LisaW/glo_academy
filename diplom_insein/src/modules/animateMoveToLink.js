

const animateMoveToLink = () => {
  //  document.body.classList.add ('container-loading');
    document.addEventListener('beforeunload',  ()=>{
      
        document.body.classList.add('container-loading');
    });
    document.addEventListener('DOMContentLoaded', () =>{
          if (document.querySelector('#main .container')){
            document.querySelector('#main .container').style.display ='block';
          } else{
            document.querySelector('#menu .container').style.display ='block';

          }
          document.body.classList.add('container-loaded');
    });
};

export default animateMoveToLink;