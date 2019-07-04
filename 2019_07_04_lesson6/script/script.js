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

let appData = {
    income :{},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function(){
        let expenseItem = 0;
        let question ='';
        let addExpenses =prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm( 'Есть ли у вас депозит в банке?' );
        for( let i=0; i<2; i++){
            if ( i===0 ){
                question = prompt( 'Какие обязательные ежемесячные расходы у вас есть?','expens1' );
            }
            else{
               question = prompt( 'Какие обязательные ежемесячные расходы у вас есть?', 'expens2' );
            }
       
            do { expenseItem = prompt( 'Во сколько это обойдется?', 300);}
            while( isNaN(expenseItem) || expenseItem ==='' || expenseItem == null);
            appData.expenses[question]=expenseItem;
        }
    },
    getExpensesMonth: function(){ 
        for( let prop in appData.expenses){
            appData.expensesMonth+= +appData.expenses[prop];
        }
   },
   getBudget: function (  ){
        appData.budgetMonth=((isNaN( money ) ? 0 : money) - appData.expensesMonth);
        appData.budgetDay= appData.budgetMonth/30;
    },
    getTargetMonth: function ( target, budget ){
        return( target/budget );
    },
    getStatusIncome : function( budgetItem ){
        if ( budgetItem > 800 ){
            return( 'Высокий уровень дохода' );
        }
        else if( budgetItem > 300 ){
            return( 'Средний уровень дохода' );
        }
        else if(budgetItem >= 0 ){
            return( 'Низкий уровень дохода' );
        }
        else{
            return( 'Что-то пошло не так' );
        }
    } 
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log(appData.expenses);
console.log( 'Накопления за период: '+ appData.budgetMonth );

console.log( (appData.budgetMonth >= 0) ? 
'Cрок достижения цели в месяцах '+ Math.floor( appData.getTargetMonth( appData.mission, appData.budgetMonth )) :
 'Цель не будет достигнута' );

console.log( appData.budgetDay );
console.log('Наша программа включает в себя : ');
for ( let prop in appData){
    console.log(prop+': '+ appData[prop]);
}






