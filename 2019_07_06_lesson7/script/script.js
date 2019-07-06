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
    percentDeposit: 0,
    moneyDeposit:0, 
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    asking: function(){

        if( confirm( 'Есть ли у вас дополнительный источник заработка?' ) ){
            let itemIncome = '';
            let cashIncome = 0;
            do{ itemIncome = prompt( 'Какой у вас дополнительный заработок?','Вязание' ); }
            while( itemIncome ==='' || itemIncome == null );
            do{ cashIncome = prompt( 'Сколько вы на этом зарабатываете?', 1000 );}
            while( isNaN(cashIncome) || cashIncome ==='' || cashIncome == null);
            appData.income[itemIncome] = cashIncome; 
        }
        let expenseItem = 0;
        let question ='';
        let addExpenses =prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm( 'Есть ли у вас депозит в банке?' );
        appData.getDepositInfo();
        for( let i=0; i<2; i++){
            do{
                if ( i===0 ){
                    question = prompt( 'Какие обязательные ежемесячные расходы у вас есть?','expens1' );
                }
                else{
                question = prompt( 'Какие обязательные ежемесячные расходы у вас есть?', 'expens2' );
                }
            }
            while( question === ''|| question == null);
       
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
        appData.budgetMonth=((isNaN( appData.budget ) ? 0 : appData.budget) - appData.expensesMonth);
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
        
    },
    getDepositInfo: function(){
        if(appData.deposit){
            do{ appData.percentDeposit = prompt( 'Какой годовой процент?', '10' );}
            while( isNaN(appData.percentDeposit) || appData.percentDeposit =='' || appData.percentDeposit == null);
            do{ appData.moneyDeposit = prompt( 'Какая сумма депозита?', 10000 );}
            while( isNaN(appData.moneyDeposit) || appData.moneyDeposit =='' || appData.moneyDeposit == null);
        }
    },
    calcSavedMoney(){
        return appData.budgetMonth* appData.period;
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

function tostringPositionsOfBudget( obj ){
    let printLine='';
    
    for( let item in  obj){
        if (Array.isArray(obj)){
            if(obj[item]){
            printLine+= obj[item].substring(0,1).toUpperCase()+obj[item].substring(1).toLowerCase() +', ';}
        } else{
            printLine+= item.substring(0,1).toUpperCase()+item.substring(1).toLowerCase() +', ';}
        }
        printLine = printLine.substring(0, printLine.length-2);
     return printLine;
    }
// console.log( appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney);
console.log ('Возможные доходы: '+ tostringPositionsOfBudget(appData.income)+'; возможные расходы: '+
tostringPositionsOfBudget( appData.addExpenses )+'.');




