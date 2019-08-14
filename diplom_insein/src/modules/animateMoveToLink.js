

const animateMoveToLink = () => {
    window.onbeforeunload  = ()=>{
        document.body.classList.add('container-loading');
    };
      window.onloadstart =() =>{
          document.body.classList.add('container-loaded');
    };
};

export default animateMoveToLink;