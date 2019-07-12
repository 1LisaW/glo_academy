
let cssText = {
    height: 'height:20px',
    width: 'width:250px',
    bg: 'background: inherit',
    fontSize:'font-size: large'

};

function DomElement(selector,options){
    this.selector = selector;
    options = options||{};
    this.createElem = function(){
        let newDiv;
        if (this.selector[0]==='.'){
            newDiv = document.createElement('div');
            newDiv.classList.add(selector.replace('.',''));
            this.cssText(newDiv);}   

        else if(this.selector[0]==='#'){
            newDiv = document.createElement('p');
            newDiv.id =selector.replace('#','');
            this.cssText(newDiv);    
        }
        newDiv.textContent ='new object '+selector;
        document.body.appendChild(newDiv);
    };
    this.cssText = function(elem){
        let listAtrr ='';
        for(let item in options){
            listAtrr+=options[item]+';';
            
        }
        elem.setAttribute('style',listAtrr);
        console.log(listAtrr);
    };
}

const firstDiv = new DomElement('.divClass', cssText);
firstDiv.createElem();

const firstP = new DomElement('#pId', cssText);
firstP.createElem();

// второе задание 

let squareCss = {
    height: 'height: 100px',
    width: 'width: 100px',
    background: 'background-color: green',
    position: 'position: absolute'
};
const square = new DomElement('.square', squareCss);
square.textContent='';

document.addEventListener('DOMContentLoaded', ()=>{
   
    square.createElem();
});


let moving = function(e){
    let squareFrom = document.querySelector('.square');
    let squareStyle = window.getComputedStyle(document.querySelector('.square'));
    let left = parseInt(squareStyle.marginLeft);
    let top = parseInt(squareStyle.marginTop);
    // console.log(left);
    // console.log(e.keyCode);
    switch(e.keyCode) {
    case 37:
        squareFrom.style.marginLeft = left - 10+'px';
        break;        
    case 39:
        squareFrom.style.marginLeft =left+10+'px';
        break;
    case 38:
        squareFrom.style.marginTop =top-10+'px';
        break;
    case 40:
        squareFrom.style.marginTop =top+10+'px';
        break;


}
};

addEventListener('keydown',moving);