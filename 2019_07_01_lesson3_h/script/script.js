'use strict';

let stringRu = 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресение';
let stringEn = 'Mondey, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';

function printRu(){
    console.log( stringRu );
}

function printEn(){
    console.log( stringEn);
}

let lang = 'en';

if ( lang == 'ru' ){
    printRu();
}
else{
    printEn();
}

switch ( lang ){

    case 'ru': 
        printRu();
        break;
    case 'en':
        printEn();
        break;
    default:
        console.log( 'Введено неверное значение языка. Укажите en/ru');

}

let arrayDay = [];
arrayDay.push( ['ru',stringRu]);
arrayDay.push( ['en',stringEn]);
let currentString = arrayDay.find(function(elem){ return elem[0]==lang ;});
console.log(currentString[1]);

let namePerson ='Игорь';
let personBase = {
    'Артем': 'Директор',
    'Максим': 'Преподаватель'
};

console.log(( personBase[namePerson] === undefined ) ? 'Студент' : personBase[namePerson] );
