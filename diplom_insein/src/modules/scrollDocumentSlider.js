const scrollDocumentSlider =()=>{

    const slidesOfDocument = document.querySelectorAll('section');
    const mapOfSlides = new Map();
    let localheight =0;
    slidesOfDocument.forEach( item =>{
        mapOfSlides.set(item,{'idTo': item.querySelector('a[href]').hash, 'top':localheight,'bottom':localheight+item.clientHeight});
        localheight+=item.clientHeight;
    });

};

export default scrollDocumentSlider;