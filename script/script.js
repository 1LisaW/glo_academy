// money- доход за месяц
let money = 10000;
let income = "freelance";
let addExpenses = "Cat1,cat2,cat3";
let deposit = false;
let mission = 1000000;
let perion =12;
let budgetDay =money/30;

console.log( typeof(money) );
console.log( typeof(income) );
console.log( typeof(deposit) );
console.log( income.length );
console.log ( "Период "+perion+" месяцев" );
console.log( "Цель заработать "+ mission+ " юани" );
console.log( addExpenses.toLowerCase().split( "," ) );
console.log( "Дневной доход: "+budgetDay+ ", остаток от деления: "+ money%30 );