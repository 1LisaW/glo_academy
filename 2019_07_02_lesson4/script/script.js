"use strict";

let money = prompt( 'Ваш месячный доход?' );
let addExpenses =prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
let income = "freelance";
let mission = 1000000;
let perion = 12;
let budgetDay = money/30;
let deposit = confirm( 'Есть ли у вас депозит в банке?' );

let showTypeof = function(item){
    console.log(item, typeof item);
};

showTypeof( money );
showTypeof( income );
showTypeof( deposit );
let question1 = prompt( 'Какие обязательные ежемесячные расходы у вас есть?' );
let question2 = prompt( 'Во сколько это обойдется?' );
let question3 = prompt( 'Какие обязательные ежемесячные расходы у вас есть?' );
let question4 = prompt( 'Во сколько это обойдется?' );

function getExpensesMonth( expens1, expens2 ){ 
   return( ( isNaN( expens1 ) ? 0 : +expens1 ) + (isNaN( expens2 ) ? 0 : +expens2 ) );
}

function getAccumulatedMonth( incomeMoney, expenses ){
    return((isNaN( incomeMoney ) ? 0 : incomeMoney) - expenses);
}

let accumulatedMonth = getAccumulatedMonth( money, getExpensesMonth( question2, question4 ) );
console.log( 'Накопления за период: '+ accumulatedMonth );

function getTargetMonth( target, budget ){
    return( target/budget );
}

console.log( (accumulatedMonth > 0) ? 
'Cрок достижения цели в месяцах '+ Math.floor( getTargetMonth( mission, accumulatedMonth )) :
 'Вы не сможете достичь данной цели - у вас нет дохода!' );

budgetDay = accumulatedMonth/30;

function getStatusIncome( budget ){
    if ( budget > 800 ){
        return( 'Высокий уровень дохода' );
    }
    else if( budget == 800 ){
    }
    else if( budget > 300 ){
        return( 'Средний уровень дохода' );
    }
    else if(budget == 300 ){
    }
    else if(budget > 0 ){
        return( 'Низкий уровень дохода' );
    }
    else if(budget == 0 ){
    }
    else{
        return( 'Что-то пошло не так' );
    }
}

console.log( getStatusIncome( budgetDay ) );








