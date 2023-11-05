function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        return "Math Error";
    }
    else if ( (a / b) % 1 != 0) {
        resultat = a / b ;
        return resultat.toFixed(2);
    }
    else 
    return a /b ;  
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, operator, secondNum){
    switch(operator){
        case "+" :
            return add(firstNum, secondNum);
            // console.log(add(firstNum, secondNum));
        case "-" :
            return substract(firstNum, secondNum);
        case "*" :
            return multiply(firstNum, secondNum);
        case "/" :
            return divide(firstNum, secondNum);
        default :
            return "No operator found!";
    }
}
const screen = document.querySelector('#display');
let screenDefault = document.querySelector('#display p');
const displayValue = document.createElement('p');
const displayResult = document.createElement('p');

function display(value){
        console.log(value);
        if(value == '='){
            displayValue.textContent += ' ' ;
        }
        else if(value == '+' || value == '-' || value == '*' || value == '/'){
            screen.removeChild(screenDefault);
            displayValue.textContent += ' ' + value + ' ';
        }else{
            screen.removeChild(screenDefault);
            displayValue.textContent += value ;
        }
        screen.appendChild(displayValue);
        screenDefault = displayValue ;//for update 
        return displayValue.textContent;
        
        
}
const btns = document.querySelectorAll('.btn');

btns.forEach((item)=>{ item.addEventListener('click', ()=>{
        mathExp = display(item.value);
        parsedMathExp = mathExp.split(' ');
        firstNum = +parsedMathExp[0];
        operator = parsedMathExp[1];
        secondNum = +parsedMathExp[2];

} )
})

const equals = document.querySelector('#equal');
equals.addEventListener('click', ()=>{
        let result = operate(firstNum, operator, secondNum);
        screen.removeChild(screenDefault);
        displayValue.textContent = result ;
        screen.appendChild(displayValue);
        screenDefault = displayValue ;//for update 
    
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', ()=>{
        //display nothing
        screen.removeChild(screenDefault);
        displayValue.textContent = null ;
        screen.appendChild(displayValue);
        screenDefault = displayValue ;//for update 
        //clear all variables
        mathExp = null;
        parsedMathExp = [];
    
})
