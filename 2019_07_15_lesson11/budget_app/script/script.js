"use strict";

const start = document.querySelector('#start');
const btnPlus = document.getElementsByTagName('button');
const buttonsPlusIncome = document.querySelectorAll('button')[0];
const expensesPlus = document.querySelectorAll('button')[1];
const deposit = document.querySelector('#deposit-check');
const additionalIncomeItem = document.querySelectorAll('.additional_income-item');
const budgetDayValue = document.querySelector('.budget_day-value');
const budgetMonthValue = document.querySelector('.budget_month-value');
const expensesMonthValue = document.querySelector('.expenses_month-value');
const accumulatedMonthValue = document.querySelector('.accumulated_month-value');
const additionalIncomeValue = document.querySelector('.additional_income-value');
const additionalExpensesValue = document.querySelector('.additional_expenses-value');
const incomePeriodValue = document.querySelector('.income_period-value');
const targetMonthValue = document.querySelector('.target_month-value');

const salaryAmount = document.querySelector('.salary-amount');
let incomeItems = document.querySelectorAll('.income-items'); 
let expensesItems =document.querySelectorAll('.expenses-items');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpenses = document.querySelector('.additional_expenses');
const depositCheck = document.querySelector('#deposit-check');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');


class AppDataClass {
    constructor (income={},incomeMonth=0, addIncome=[], expenses={}, addExpenses=[],deposit=false, percentDeposit=0,
        moneyDeposit=0, budget=0, budgetDay=0, budgetMonth=0, expensesMonth=0 ){
            this.income = income;
            this.incomeMonth =incomeMonth;
            this.addIncome = addIncome;
            this.addExpenses = addExpenses;
            this.expenses = expenses;
            this.deposit = deposit;
            this.percentDeposit = percentDeposit;
            this.moneyDeposit = moneyDeposit;
            this.budget = budget;
            this.budgetDay = budgetDay;
            this.budgetMonth = budgetMonth;
            this.expensesMonth = expensesMonth;
        }
        getExpenses(){
            expensesItems.forEach((item)=>{
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !=='' && cashExpenses!== ''){
                    this.expenses[itemExpenses] = cashExpenses;
                    
                }

            });
        }
        start(){
            if (salaryAmount.value ==='' ){
                start.setAttribute('disabled','disabled');
                return;
            }
    
            this.budget = +salaryAmount.value;
            this.getExpenses();
            this.getExpensesMonth();
            
            this.getAdd(additionalExpensesItem.value.split(','),this.addExpenses);
            this.getAdd(additionalIncomeItem,this.addIncome);
            this.getIncome();
            this.getDepositInfo();
            this.getBudget();
            this.showResult();
            collectCookie();
            let buttonReset = start.cloneNode(true);
            buttonReset.id = 'reset';
            buttonReset.textContent ='Сбросить';
    
            start.parentNode.replaceChild(buttonReset,start);
            let reset = document.querySelector('#reset');
            
            let allInput = document.querySelectorAll('input[type=text] ');
            allInput.forEach(function(item){
                item.setAttribute('disabled','disabled');
                });
            reset.addEventListener('click', this.reset.bind(this));
        }
        reset(){
            this.income ={};
            this.addIncome= [];
            this.expenses= {};
            this.addExpenses = [];
            this.expensesMonth = 0;
            this.budget =0;
            this.budgetMonth =0;
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
        }
        showResult(){
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = Math.floor(this.budgetDay);
            expensesMonthValue.value = this.expensesMonth;  
            additionalExpensesValue.value = this.addExpenses.join(', ');
            additionalIncomeValue.value = this.addIncome.join(', ');
            targetMonthValue.value =Math.ceil(this.getTargetMonth());
            this.calcPeriod();
            periodSelect.addEventListener('change',this.calcPeriod.bind(this));

        }
        addBlock(items,subclassName,buttonName){
            let cloneItem = items[0].cloneNode(true);
            cloneItem.querySelector(`.${subclassName}-title`).value='';
            cloneItem.querySelector(`.${subclassName}-amount`).value='';
            items[0].parentNode.insertBefore(cloneItem, buttonName);
         
            items = document.querySelectorAll(`.${subclassName}-items`);
            if (items.length === 3){
                buttonName.style.display ='none';
            }
            return items;

        }
        // addExpensesBlock(){
        //    let cloneExpensesItem = expensesItems[0].cloneNode(true);
        //    cloneExpensesItem.querySelector('.expenses-title').value='';
        //    cloneExpensesItem.querySelector('.expenses-amount').value='';
            
        //     expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        //     expensesItems = document.querySelectorAll('.expenses-items');
        //     if (expensesItems.length === 3){
        //         expensesPlus.style.display ='none';
        //     }
        // }
        // addIncomeBlock(){
        //     let cloneIncomeItem = incomeItems[0].cloneNode(true);
        //     cloneIncomeItem.querySelector('.income-title').value ='';
        //     cloneIncomeItem.querySelector('.income-amount').value='';
            
        //     incomeItems[0].parentNode.insertBefore(cloneIncomeItem, buttonsPlusIncome);
        //     incomeItems = document.querySelectorAll('.income-items');
        //     if ( incomeItems.length ===3 ){
        //         buttonsPlusIncome.style.display ='none';
        //     }
        // }
        changeRange(){
            periodAmount.textContent = periodSelect.value;
            
        }
       
        getIncome(){
            incomeItems.forEach((item)=>{
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if ( itemIncome!=='' && cashIncome!==''){
                    this.income[itemIncome] = cashIncome;
                    this.incomeMonth+= +cashIncome;
                }

            });

        }
        getAdd(additionalItem,addObject){
            additionalItem.forEach((item)=>{
                let itemValue;
                if (!Array.isArray(additionalItem)){
                    itemValue = item.value.trim();}
                else{
                    itemValue = item.trim();
                }
                if(itemValue!==''){
                    addObject.push(itemValue);
                }
            });
            

        }
        getAddExpenses(){
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach( (item)=>{
                item = item.trim();
                if (item!==''){
                    this.addExpenses.push(item);
                }
            });

        }
        getAddIncome(){
            additionalIncomeItem.forEach((item)=>{
                let itemValue = item.value.trim();
                if(itemValue!==''){
                    this.addIncome.push(itemValue);
                }
            });
        }
 
        getExpensesMonth(){ 
            for( let prop in this.expenses){
                this.expensesMonth+= +this.expenses[prop];
            }
        }
        getBudget(){
            this.budgetMonth=((isNaN( this.budget ) ? 0 : this.budget) +
            this.incomeMonth- this.expensesMonth)+(this.percentDeposit*this.moneyDeposit/12);
            this.budgetDay= this.budgetMonth/30;
        }
        getTargetMonth(){
            return( targetAmount.value/this.budgetMonth );
        }
    // getStatusIncome( budgetItem ){
    //     if ( budgetItem > 800 ){
    //         return( 'Высокий уровень дохода' );
    //     }
    //     else if( budgetItem > 300 ){
    //         return( 'Средний уровень дохода' );
    //     }
    //     else if(budgetItem >= 0 ){
    //         return( 'Низкий уровень дохода' );
    //     }
    //     else{
    //         return( 'Что-то пошло не так' );
    //     }
        
    // }
        getDepositInfo(){
            if(this.deposit){
                this.percentDeposit = depositPercent.value;
                this.moneyDeposit = depositAmount.value;
            }
        }
        calcPeriod(){
            incomePeriodValue.value = this.budgetMonth* periodSelect.value;
        }

        eventsListeners(){
            const self =this;
            depositCheck.addEventListener('change', ()=> {
                if (depositCheck.checked) {
                    this.deposit = true;
                    depositBank.style.display ='inline-block';
                    depositAmount.style.display ='inline-block';
                    depositBank.addEventListener('change', function(){
                        let selectIndex = this.options[this.selectedIndex].value;
                        if( selectIndex ==='other'){
                            depositPercent.style.display ='inline-block';
                            depositPercent.value = '';
                        }
                        else{
                            depositPercent.style.display ='none';
                            depositPercent.value = selectIndex;
                        }
                    });
                }
                else{
                    this.deposit=false; 
                    depositBank.style.display ='none';
                    depositAmount.style.display ='none';
                    depositAmount.value='';
                }
            
            
            });
            start.addEventListener('click', this.start.bind(this)); 
            expensesPlus.addEventListener('click', ()=>{expensesItems = 
                this.addBlock(expensesItems,'expenses',expensesPlus);});
            buttonsPlusIncome.addEventListener('click', ()=>{incomeItems = 
                this.addBlock(incomeItems, 'income', buttonsPlusIncome);});
            
            
    
            periodSelect.addEventListener('change',this.changeRange);
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
            salaryAmount.addEventListener('change',()=>{start.removeAttribute('disabled');});
        }
}


const appData = new AppDataClass();
appData.eventsListeners();
const objForCookie={
    'budgetDayValue': budgetDayValue,
    'budgetMonthValue': budgetMonthValue,
    'expensesMonthValue': expensesMonthValue,
    'accumulatedMonthValue': accumulatedMonthValue,
    'additionalIncomeValue': additionalIncomeValue,
    'additionalExpensesValue': additionalExpensesValue,
    'incomePeriodValue': incomePeriodValue,
    'targetMonthValue': targetMonthValue

  };

function setCookie(name, value, options) {
    options = options || {};
  
    var expires = options.expires;
  
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
  
    value = encodeURIComponent(value);
  
    var updatedCookie = name + "=" + value;
  
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  
    document.cookie = updatedCookie;
  }

  function collectCookie(){
      
      for ( let item in objForCookie ){
          setCookie(item, objForCookie[item].value,60);
          localStorage.setItem(item, objForCookie[item].value);
      }
      setCookie('isLoad', true, 60);
      
  }

  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function deleteCookie(name) {
    setCookie(name, "", {
      expires: -1
    });
  }
  let checkEqual = true;
  function loadCookie(){
      
      for (let item in objForCookie){
        if ( getCookie(item)=== undefined || getCookie(item) !== localStorage.getItem(item) ){
            checkEqual =false;
            break;
        }
      }
      if ( checkEqual==false){
          for (let item in objForCookie){
              deleteCookie(item);
          }
          localStorage.clear();

      }
       if (checkEqual){
         setTimeout(()=>{
            budgetDayValue.value = localStorage.getItem('budgetDayValue');
            budgetMonthValue.value = localStorage.getItem('budgetMonthValue');
            expensesMonthValue.value = localStorage.getItem('expensesMonthValue');
            accumulatedMonthValue.value = localStorage.getItem('accumulatedMonthValue');
            additionalIncomeValue.value = localStorage.getItem('additionalIncomeValue');
            additionalExpensesValue.value = localStorage.getItem('additionalExpensesValue');
            incomePeriodValue.value = localStorage.getItem('incomePeriodValue');
            targetMonthValue.value= localStorage.getItem('targetMonthValue');},0);

       }

  }


// window.onbeforeunload = collectCookie;
 window.onload =loadCookie;