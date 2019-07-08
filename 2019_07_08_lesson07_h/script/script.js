
let dateOfNow = new Date();
function getDateTime(date){
    let arr = [];
    arr.push(addZero(date.getHours()));
    arr.push(addZero(date.getMinutes()));
    arr.push(addZero(date.getSeconds()));
    console.log(arr);
    return arr.join(':'); 
    
}

function addZero(date){
    return (date<10 ? '0'+ date : date);
}
function getDate(date){
    let arr =[];
    arr.push( addZero(date.getDate()));
    arr.push( addZero(date.getMonth()));
    arr.push( date.getFullYear() );
    return arr.join('.');
}

let newElem = document.createElement('div');
newElem.textContent = getDateTime(dateOfNow) + ' ' +getDate(dateOfNow);
newElem.setAttribute('style','color: red; font-weight: bold');
document.body.appendChild(newElem);


