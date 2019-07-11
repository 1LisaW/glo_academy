"use strict";

let start = document.querySelector('#start');
let btnPlus = document.getElementsByTagName('button');
let buttonsPlusIncome = document.querySelectorAll('button')[0];
let expensesPlus = document.querySelectorAll('button')[1];
let deposit = document.querySelector('#deposit-check');
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.querySelector('.budget_day-value');
let budgetMonthValue = document.querySelector('.budget_month-value');
let expensesMonthValue = document.querySelector('.expenses_month-value');
let accumulatedMonthValue = document.querySelector('.accumulated_month-value');
let additionalIncomeValue = document.querySelector('.additional_income-value');
let additionalExpensesValue = document.querySelector('.additional_expenses-value');
let incomePeriodValue = document.querySelector('.income_period-value');
let targetMonthValue = document.querySelector('.target_month-value');

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeItems = document.querySelectorAll('.income-items'); 
let  expensesTitle = document.querySelector('.expenses-title');
let expensesItems =document.querySelectorAll('.expenses-items');
let  expensesAmount = document.querySelector('.expenses-amount');
let  additionalExpenses = document.querySelector('.additional_expenses');
let  depositCheck = document.querySelector('.deposit-checkmark');
let  depositBank = document.querySelector('.deposit-bank');
let  depositAmount = document.querySelector('.deposit-amount');
let  depositPercent = document.querySelector('.deposit-percent');
let  targetTitle= document.querySelector('.target-title');
let  targetAmount = document.querySelector('.target-amount');
let  periodSelect = document.querySelector('.period-select');
let  periodAmount = document.querySelector('.period-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');



let money;

let appData = {
    income :{},
    incomeMonth:0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit:0, 
    // mission: 50000,
    period: 3,
    budget: 0,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    start: function(event){
        // start.removeAttribute("disabled");
        console.log(salaryAmount.value);
        if (salaryAmount.value ==='' ){
            // start.remove();
            console.log(start);
            start.setAttribute('disabled','disabled');
            return;
        }
        appData.budget = +salaryAmount.value;
        // appData.asking();
        appData.getExpenses();
        appData.getExpensesMonth();
        
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncome();
        appData.getBudget();
        appData.showResult();
        let buttonReset = start.cloneNode(true);
        buttonReset.textContent ='Сбросить';

        start.parentNode.replaceChild(buttonReset,start);
        // start.textContent ='Сбросить';
        
        let allInput = document.querySelectorAll('input[type=text] ');
        allInput.forEach(function(item){
            item.setAttribute('disabled','disabled');
            });
        },
        showResult: function(){
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = Math.floor(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;  
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value =Math.ceil(appData.getTargetMonth());
            appData.calcPeriod();
            periodSelect.addEventListener('change',appData.calcPeriod);
        },
        addExpensesBlock: function(){
            // let 
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
           cloneExpensesItem.querySelector('.expenses-title').value='';
           cloneExpensesItem.querySelector('.expenses-amount').value='';
            
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3){
                expensesPlus.style.display ='none';
            }
        },
        addIncomeBlock: function(){
            let cloneIncomeItem = incomeItems[0].cloneNode(true);
            cloneIncomeItem.querySelector('.income-title').value ='';
            cloneIncomeItem.querySelector('.income-amount').value='';
            
            incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonsPlusIncome);
            incomeItems = document.querySelectorAll('.income-items');
            if ( incomeItems.length ===3 ){
                buttonsPlusIncome.style.display ='none';
            }
        },
        changeRange: function(){
            periodAmount.textContent = periodSelect.value;
            
        },
        getExpenses: function(){
            console.log(expensesItems);
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !=='' && cashExpenses!== ''){
                    appData.expenses[itemExpenses] = cashExpenses;
                    
                }

            });
        },
        getIncome: function(){
            incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if ( itemIncome!=='' && cashIncome!==''){
                    appData.income[itemIncome] = cashIncome;
                    appData.incomeMonth+= +cashIncome;
                }

            });

            // if( confirm( 'Есть ли у вас дополнительный источник заработка?' ) ){
            //     let itemIncome = '';
            //     let cashIncome = 0;
            //     do{ itemIncome = prompt( 'Какой у вас дополнительный заработок?','Вязание' ); }
            //     while( itemIncome ==='' || itemIncome == null );
            //     do{ cashIncome = prompt( 'Сколько вы на этом зарабатываете?', 1000 );}
            //     while( isNaN(cashIncome) || cashIncome ==='' || cashIncome == null);
            //     appData.income[itemIncome] = cashIncome; 
            // }
        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach( function(item){
                item = item.trim();
                if (item!==''){
                    appData.addExpenses.push(item);
                }
            });

        },
        getAddIncome: function(){
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if(item.value!==''){
                    appData.addIncome.push(itemValue);
                }
            });
        },
 
    getExpensesMonth: function(){ 
        for( let prop in appData.expenses){
            appData.expensesMonth+= +appData.expenses[prop];
        }
   },
   getBudget: function (  ){
        appData.budgetMonth=((isNaN( appData.budget ) ? 0 : appData.budget) +
        appData.incomeMonth- appData.expensesMonth);
        appData.budgetDay= appData.budgetMonth/30;
    },
    getTargetMonth: function ( ){
        return( targetAmount.value/appData.budgetMonth );
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
    calcPeriod(){
        incomePeriodValue.value = appData.budgetMonth* periodSelect.value;
    } 
};

start.addEventListener('click', appData.start); 


expensesPlus.addEventListener('click',appData.addExpensesBlock);
buttonsPlusIncome.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change',appData.changeRange);
let inputBlocks = document.querySelectorAll('[placeholder="Наименование"]');
// console.log(inputBlocks);
inputBlocks.forEach(function(item){
    item.addEventListener('input',()=> {
        item.value = item.value.replace(/[^а-яА-Я,.!? \-;:]/g,'');
    });

});
let inputNumberBlocks = document.querySelectorAll('[placeholder="Сумма"]');
inputNumberBlocks.forEach(function(item){
    item.addEventListener('input',()=> {
        item.value = item.value.replace(/[^0-9]/g,'');
    });

});
console.log(appData.expenses);
console.log( 'Накопления за период: '+ appData.budgetMonth );

console.log( (appData.budgetMonth >= 0) ? 
'Cрок достижения цели в месяцах '+ Math.floor( appData.getTargetMonth()) :
 'Цель не будет достигнута' );

// console.log( appData.budgetDay );
// console.log('Наша программа включает в себя : ');
// for ( let prop in appData){
//     console.log(prop+': '+ appData[prop]);
// }

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
// console.log( appData.percentDeposit, appData.moneyDeposit, appData.calcPeriod);
console.log ('Возможные доходы: '+ tostringPositionsOfBudget(appData.income)+'; возможные расходы: '+
tostringPositionsOfBudget( appData.addExpenses )+'.');
salaryAmount.addEventListener('change',()=>{start.removeAttribute('disabled');})