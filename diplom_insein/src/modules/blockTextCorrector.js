
const blockTextCorrector = () =>{
    const twelveNewsLeft = document.querySelector('.twelve-news-left p');
    const changeLengthNewsLeft = document.querySelector('.twelve-news-left a');
    const twelveNewsRight = document.querySelector('.twelve-news-right p');
    const changeLengthNewsRight = document.querySelector('.twelve-news-right a');
    const blockNews = document.getElementById('twelve');
    const twelveNewsLeftShort = document.createElement('p');
    const imgTwelveNewsLeft = document.querySelector('.twelve-news-left img');
    const imgTwelveNewsRight = document.querySelector('.twelve-news-right img');
    twelveNewsLeftShort.innerText = twelveNewsLeft.innerText.slice(0,49)+'...';
    twelveNewsLeftShort.classList.add('toggle-news');
    twelveNewsLeft.insertAdjacentElement('afterend',twelveNewsLeftShort);

    const twelveNewsRightShort = document.createElement('p');
    twelveNewsRightShort.innerText = twelveNewsRight.innerText.slice(0,49)+'...';
    twelveNewsRightShort.classList.add('toggle-news');
    twelveNewsRight.insertAdjacentElement('afterend',twelveNewsRightShort);

    const getChangeText = (textBlock, recoverTextBlock, imgBlock, linkNoda ) => {
        textBlock.classList.toggle('toggle-news');
        recoverTextBlock.classList.toggle('toggle-news');
        if (textBlock.classList.contains('toggle-news')){
            linkNoda.textContent ='читать далее';
            imgBlock.classList.remove('toggle-news');
        }
        else{
            linkNoda.textContent ='скрыть';
            imgBlock.classList.add('toggle-news');
        }
    };

    if (twelveNewsLeft.innerText.length <= 50){
        changeLengthNewsLeft.style.display ='none';
    }
    else{
        getChangeText(twelveNewsLeft,twelveNewsLeftShort,imgTwelveNewsLeft,changeLengthNewsLeft);
    }
    if (twelveNewsRight.innerText.length <= 50){
        changeLengthNewsRight.style.display ='none';
    }
    else{
        getChangeText(twelveNewsRight,twelveNewsRightShort,imgTwelveNewsRight,changeLengthNewsRight);
    }

    blockNews.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.twelve-news-left a')){
            getChangeText(twelveNewsLeft,twelveNewsLeftShort,imgTwelveNewsLeft,changeLengthNewsLeft);
        }
        if (target.closest('.twelve-news-right a')){
            getChangeText(twelveNewsRight,twelveNewsRightShort,imgTwelveNewsRight,changeLengthNewsRight);
        }
    });
};

export default blockTextCorrector;