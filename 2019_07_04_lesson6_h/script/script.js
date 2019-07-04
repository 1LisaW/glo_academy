'use strict';

let week =['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// console.log( week.join(','));
let dayOfWeek = new Date();
for (let item in week){
    let block = document.createElement('div');
    
    block.innerHTML= week[item];
    if (item == (dayOfWeek.getDay()-1) ){
        block.style.fontWeight = 'bold';
    }
    if ( item>4 ){
        block.style.fontStyle = 'italic';
    }
    document.body.appendChild(block);

}
