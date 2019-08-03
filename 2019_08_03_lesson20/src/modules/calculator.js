// калькулятор
const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount =document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');
    
    const countSum = () => {
        let total =0;
        let countValue =1;
        let dayValue =1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const squareValue = +calcSquare.value;
        if (calcCount.value > 1){
            countValue += (calcCount.value-1)/10;

        }
        if (calcDay.value && calcDay.value <5){
            dayValue*=2;
        } else if (calcDay.value && calcDay.value <10){
            dayValue*=1.5;
        }

        if (typeValue && squareValue){
            total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
        } else{
        total = 0;
        }
        const animation = () => {
            let totalNumber = +document.getElementById('total').textContent;
            const counter = totalValue.textContent;
            const iter = Math.ceil(Math.abs(totalNumber-total)/20);

            if (Math.abs(total - totalNumber)<iter){
                totalNumber = total;
                totalValue.textContent = +total;
            }
            if (total> totalNumber){
                totalValue.textContent = +counter + iter;
                requestAnimationFrame(animation);
            } else if (total < totalNumber){
                totalValue.textContent = +counter- iter;
                requestAnimationFrame(animation);
            }
            
        };
        requestAnimationFrame(animation);
    };
    calcBlock.addEventListener('change', (event) =>{
        
        const target = event.target;
        if (target === calcType || target === calcSquare || target === calcDay || target === calcCount){
            countSum(price);
        }
    });

    calcBlock.addEventListener('input', (event) =>{
        const target = event.target;
        if (target.matches('input.calc-item')){
            target.value = target.value.replace(/[^\d]/g,'');

        }
    });
};

export default calculator;