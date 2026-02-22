let calculation = '';
let justCalculated = false;
let history = JSON.parse(localStorage.getItem('history')) || [];

displayCalculation();
displayHistory();

function updateCalculation(value){
    if(justCalculated && /[0-9.]/.test(value)){
        calculation = '';
        justCalculated = false;
    }

    if(justCalculated && /[+\-*/]/.test(value)){
        justCalculated = false;
    }
    calculation += value;
    displayCalculation();

    localStorage.setItem('calculation', calculation);
}

function displayCalculation(equals){
    const display = document.querySelector('.js-calculation');
    if(equals === '='){
        const hasOperator = /[+\-*/]/.test(calculation);
        const endsWithOperator = /[+\-*/]$/.test(calculation);

        if (!hasOperator || endsWithOperator) {
            return;
        }
        try{
            const expression = calculation;
            const result = eval(calculation).toString();

            calculation = result;
            justCalculated = true;

            history.push(`${expression} = ${result}`);

            localStorage.setItem('history', JSON.stringify(history));
            displayHistory();
        }catch (err){
            calculation = 'calculation error';

            setTimeout(() => {
                calculation = '';
                displayCalculation();
                display.innerHTML = calculation;
            }, 1500)
        }
    }
    display.innerHTML = calculation;
}

function displayHistory(){
    const historyDisplay = document.querySelector('.calcHistory');
    historyDisplay.innerHTML = '';

    for(let i = 0; i < history.length; i++){
        historyDisplay.innerHTML += history[i] + '<br>';
    }
}

function clearCalculation(){
    calculation = '';
    history = [];

    localStorage.removeItem('calculation');
    localStorage.removeItem('history');

    displayCalculation();
    displayHistory();
}