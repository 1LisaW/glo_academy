'use strict';

let arr =[3123, 43242, 2345, 67567, 23243, 97976, 1321243];
for ( let i=0; i<arr.length; i++ ){
    if ((String( arr[i] )[0]==2) || (String( arr[i] )[0]== 4)){
        console.log(arr[i]);
    }
}

let arrSimple=[];

for (let i=2; i <= 100; i++){
    for (let j=2; j <= i; j++){
        if( (Math.floor(i/j)===i/j)&&(j<i)){
            break;
        }
        else if (i===j){
            arrSimple.push(j);
            getPrintMessage(j);
            
        }
    }
}

function getPrintMessage( simpleItem ){
    console.log( simpleItem + " Делители этого числа: 1 и "+simpleItem );
}
