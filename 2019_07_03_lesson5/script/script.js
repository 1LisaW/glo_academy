"use strict";

let money;
let start  = function(){
    do{ 
        money = prompt( 'Ваш месячный доход?' );
        console.log( money );
    }
    while( isNaN( money) || money.trim() === '' || money == null );
    };

start();   

let addExpenses =prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
let income = "freelance";
let mission = 1000000;
let perion = 12;
let budgetDay = money/30;
let deposit = confirm( 'Есть ли у вас депозит в банке?' );

let showTypeof = function(item){
    console.log( item, typeof item );
};

showTypeof( money );
showTypeof( income );
showTypeof( deposit );


 let getExpensesMonth = function(){ 
     let sum =0;
     let expense = 0;
     for( let i=0; i<2; i++){
         if ( i===0 ){
             let question1 = prompt( 'Какие обязательные ежемесячные расходы у вас есть?','expens1' );
         }
         else{
            let question3 = prompt( 'Какие обязательные ежемесячные расходы у вас есть?', 'expens2' );
         }
    
         do { expense = prompt( 'Во сколько это обойдется?', 300);}
         while( isNaN(expense) || expense ==='' || expense == null);
         sum+= +expense;
     }
   return( sum );
};

function getAccumulatedMonth( incomeMoney, expenses ){
    return((isNaN( incomeMoney ) ? 0 : incomeMoney) - expenses);
}

let accumulatedMonth = getAccumulatedMonth( money, getExpensesMonth() );
console.log( 'Накопления за период: '+ accumulatedMonth );

function getTargetMonth( target, budget ){
    return( target/budget );
}

console.log( (accumulatedMonth >= 0) ? 
'Cрок достижения цели в месяцах '+ Math.floor( getTargetMonth( mission, accumulatedMonth )) :
 'Цель не будет достигнута' );

budgetDay = accumulatedMonth/30;

function getStatusIncome( budget ){
    if ( budget > 800 ){
        return( 'Высокий уровень дохода' );
    }
    else if( budget > 300 ){
        return( 'Средний уровень дохода' );
    }
    else if(budget >= 0 ){
        return( 'Низкий уровень дохода' );
    }
    else{
        return( 'Что-то пошло не так' );
    }
}

console.log( getStatusIncome( budgetDay ) );








