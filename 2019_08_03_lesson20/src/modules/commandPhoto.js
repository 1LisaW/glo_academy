const commandPhoto = () => {
    const blockCommand = document.querySelector('.command');
    const getChangeImg = (target) => {
        let getChangedItem = target.src;
        target.src = target.dataset.img;
        target.dataset.img = getChangedItem;
    };
    blockCommand.addEventListener('mouseover', (event) =>{
        const target = event.target;
        if (target.matches('.command__photo')){
           getChangeImg(target);
        }
    });
    blockCommand.addEventListener('mouseout', (event) =>{
        const target = event.target;
        if (target.matches('.command__photo')){
           getChangeImg(target);
        }
    });
};

export default commandPhoto;