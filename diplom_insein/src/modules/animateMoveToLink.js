

const animateMoveToLink = () => {
    window.onbeforeunload  = ()=>{
        document.body.classList.add('container-loading');
    };
      window.onloadstart =() =>{
          if (document.querySelector('#main .container')){
            document.querySelector('#main .container').style.display ='block';
          } else{
            document.querySelector('#menu .container').style.display ='block';

          }
          document.body.classList.add('container-loaded');
    };
};

export default animateMoveToLink;