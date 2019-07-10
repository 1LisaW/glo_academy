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
let incomeItems = document.querySelectorAll('.income-items'); 
let expensesItems =document.querySelectorAll('.expenses-items');
let  expensesAmount = document.querySelector('.expenses-amount');
let  additionalExpenses = document.querySelector('.additional_expenses');
let  depositCheck = document.querySelector('.deposit-checkmark');
let  depositBank = document.querySelector('.deposit-bank');
let  depositAmount = document.querySelector('.deposit-amount');
let  depositPercent = document.querySelector('.deposit-percent');
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
    period: 3,
    budget: 0,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    start: function(event){
        if (salaryAmount.value ==='' ){
            start.setAttribute('disabled','disabled');
            return;
        }
        this.income ={};
        this.addIncome= [];
        this.expenses= {};
        this.addExpenses = [];
        this.expensesMonth = 0;
        this.budget = +salaryAmount.value;
        this.getExpenses();
        this.getExpensesMonth();
        
        this.getAddExpenses();
        this.getAddIncome();
        this.getIncome();
        this.getBudget();
        this.showResult();
        let buttonReset = start.cloneNode(true);
        buttonReset.id = 'reset';
        buttonReset.textContent ='Сбросить';

        start.parentNode.replaceChild(buttonReset,start);
        let reset = document.querySelector('#reset');
        
        let allInput = document.querySelectorAll('input[type=text] ');
        allInput.forEach(function(item){
            item.setAttribute('disabled','disabled');
            });
                    reset.addEventListener('click', appData.reset);

        },
        reset : function(){
            let reset = document.querySelector('#reset');
            document.querySelectorAll('input').forEach((item)=>item.value= '');
            let allInput = document.querySelectorAll('input[type=text] ');
            allInput.forEach(function(item){
            item.removeAttribute('disabled');
            });
            for (let i=1; i<expensesItems.length;i++){
                expensesItems[i].parentNode.removeChild(expensesItems[i]);
            }
            expensesPlus.style.display ='block';
            for (let i=1; i<incomeItems.length;i++){
                incomeItems[i].parentNode.removeChild(incomeItems[i]);
            }
            buttonsPlusIncome.style.display ='block';
            periodSelect.value = 1;
            deposit.checked =false;
            periodAmount.textContent= 1;
            reset.parentNode.replaceChild(start, reset);
        },
        showResult: function(){
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = Math.floor(this.budgetDay);
            expensesMonthValue.value = this.expensesMonth;  
            additionalExpensesValue.value = this.addExpenses.join(', ');
            additionalIncomeValue.value = this.addIncome.join(', ');
            targetMonthValue.value =Math.ceil(this.getTargetMonth());
            this.calcPeriod();
            periodSelect.addEventListener('change',this.calcPeriod.bind(appData));
        },
        addExpensesBlock: function(){
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
            expensesItems.forEach((item)=>{
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !=='' && cashExpenses!== ''){
                    this.expenses[itemExpenses] = cashExpenses;
                    
                }

            });
        },
        getIncome: function(){
            incomeItems.forEach((item)=>{
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if ( itemIncome!=='' && cashIncome!==''){
                    this.income[itemIncome] = cashIncome;
                    this.incomeMonth+= +cashIncome;
                }

            });

        },
        getAddExpenses: function(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach( (item)=>{
                item = item.trim();
                if (item!==''){
                    this.addExpenses.push(item);
                }
            });

        },
        getAddIncome: function(){
            additionalIncomeItem.forEach((item)=>{
                let itemValue = item.value.trim();
                if(item.value!==''){
                    this.addIncome.push(itemValue);
                }
            });
        },
 
    getExpensesMonth: function(){ 
        for( let prop in this.expenses){
            this.expensesMonth+= +this.expenses[prop];
        }
   },
   getBudget: function (  ){
        this.budgetMonth=((isNaN( this.budget ) ? 0 : this.budget) +
        this.incomeMonth- this.expensesMonth);
        this.budgetDay= this.budgetMonth/30;
    },
    getTargetMonth: function ( ){
        return( targetAmount.value/this.budgetMonth );
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
        if(this.deposit){
            do{ this.percentDeposit = prompt( 'Какой годовой процент?', '10' );}
            while( isNaN(this.percentDeposit) || this.percentDeposit =='' || this.percentDeposit == null);
            do{ this.moneyDeposit = prompt( 'Какая сумма депозита?', 10000 );}
            while( isNaN(this.moneyDeposit) || this.moneyDeposit =='' || this.moneyDeposit == null);
        }
    },
    calcPeriod(){
        incomePeriodValue.value = this.budgetMonth* periodSelect.value;
    },
        

};
    start.addEventListener('click', appData.start.bind(appData)); 



    expensesPlus.addEventListener('click',appData.addExpensesBlock);
    buttonsPlusIncome.addEventListener('click', appData.addIncomeBlock);
    periodSelect.addEventListener('change',appData.changeRange);
    let inputBlocks = document.querySelectorAll('[placeholder="Наименование"]');
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