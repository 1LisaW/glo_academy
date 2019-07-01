"use strict";

let money = prompt( 'Ваш месячный доход?' );
let addExpenses =prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
let income = "freelance";
let mission = 1000000;
let perion = 12;
let budgetDay = money/30;
console.log('возможные расходы: ', addExpenses.split(',',));
let deposit = confirm( 'Есть ли у вас депозит в банке?' );
console.log('deposit: ', deposit);
console.log('type of money: ', typeof( money ));
console.log('type of income: ', typeof( income ));
console.log('type of deposit: ', typeof( deposit ));
let question1 = prompt( 'Какие обязательные ежемесячные расходы у вас есть?' );
let question2 = prompt( 'Во сколько это обойдется?' );
let question3 = prompt( 'Какие обязательные ежемесячные расходы у вас есть?' );
let question4 = prompt( 'Во сколько это обойдется?' );
let budgetMonth = (isNaN( money ) ? 0 : money ) - (isNaN( question2 ) ? 0 : question2 ) +
- (isNaN( question4 ) ? 0 : question4 );
console.log('budgetMonth: ', budgetMonth);

if( budgetMonth<=0 ){
    alert( "Вы не сможете достичь данной цели - у вас нет дохода!" );
} 
else {
    console.log( 'Цель '+mission+' будет достигнута через '+ Math.ceil( mission/budgetMonth ) + ' месяца/месяцев'  );
}

budgetDay = budgetMonth/30;
console.log('budgetDay: ',  Math.floor( budgetDay ));

if ( budgetDay > 800 ){
    console.log( 'Высокий уровень дохода' );
}
else if( budgetDay == 800 ){
}
else if( budgetDay > 300 ){
    console.log( 'Средний уровень дохода' );
}
else if(budgetDay == 300 ){
}
else if(budgetDay > 0 ){
    console.log( 'Низкий уровень дохода' );
}
else if(budgetDay == 0 ){
}
else{
    console.log( 'Что-то пошло не так' );
}









