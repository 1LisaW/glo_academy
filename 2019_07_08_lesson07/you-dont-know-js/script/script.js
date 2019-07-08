let collection = document.querySelector('.books');
let elem = document.querySelectorAll('.book');

let elemRemoved = collection.removeChild(elem[2]);
collection.appendChild( elemRemoved );
elemRemoved = collection.removeChild(elem[1]);
collection.insertBefore(elemRemoved, elem[0]);
elemRemoved = collection.removeChild(elem[4]);
collection.insertBefore(elemRemoved, elem[3]);
// collection.replaceChild(elem[0],elem[1]);

let elemBody = document.querySelector('body');
elemBody.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let elemText = document.querySelectorAll('a');
elemText[2].textContent ='Книга 3. this и Прототипы Объектов';

let elemAdv = document.querySelector('.adv');
elemAdv.setAttribute('style', 'display: none');

let bookList = document.querySelectorAll('.books ul')[1];
let itemBookList = bookList.querySelectorAll('li');
let removedItem = bookList.removeChild(itemBookList[6]);
bookList.insertBefore(removedItem, itemBookList[4]);
removedItem = bookList.removeChild(itemBookList[8]);
bookList.insertBefore(removedItem, itemBookList[4]);
removedItem = bookList.removeChild(itemBookList[2]);
bookList.insertBefore(removedItem, itemBookList[10]);

bookList = document.querySelectorAll('.books ul')[4];
itemBookList = bookList.querySelectorAll('li');
removedItem = bookList.removeChild(itemBookList[2]);
bookList.insertBefore(removedItem, itemBookList[5]);
removedItem = bookList.removeChild(itemBookList[5]);
bookList.insertBefore(removedItem, itemBookList[8]);
removedItem = bookList.removeChild(itemBookList[9]);
bookList.insertBefore(removedItem, itemBookList[3]);

bookList = document.querySelectorAll('.books ul')[5];
itemBookList = bookList.querySelectorAll('li');
let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
bookList.insertBefore(newElem, itemBookList[9]);
//
