// калькулятор
const calculator = (price = 100) => {
    const priceArray =[["1",1000],["2",1900],["3",2700],["5",4500],["7",6000],["10",8000],["more",10000]];
    const priceMap =new Map(priceArray);
    const calcBlock = document.querySelector('.eight-excel.card');
    if (calcBlock === null){
        return;
    }
    
    const countSum = () => {
       
        const calcCountUsers = document.querySelector('.eight-excel-bot-price select');
        const calcMonth = document.querySelectorAll('[name="month"]');
        const totalPrice =document.getElementById('total-price');
        const counterUsersValue = calcCountUsers.options[calcCountUsers.selectedIndex].value;
        const monthValue = [...calcMonth].find((item)=> item.checked === true).value.replace(/( мес.)/,''); 
        let totalSum = priceMap.get(counterUsersValue)*monthValue;
        if (monthValue == 12){
            totalSum *= 0.9; 
        }
        totalPrice.innerText =totalSum;


    };   
      
    calcBlock.addEventListener('change', (event) =>{
        
        const target = event.target;
        if (target.closest('.eight-excel-bot-price')|| target.getAttribute('name') === "month" ){
            countSum();
        }
    });

   
};


export default calculator;