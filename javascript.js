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
    return a / b;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operator){
    switch(operator){
        case "+" :
            add(firstNum, secondNum);
            // console.log(add(firstNum, secondNum));
            break;
        case "-" :
            substract(firstNum, secondNum);
            break;
        case "*" :
            multiply(firstNum, secondNum);
            break;
        case "/" :
            divide(firstNum, secondNum);
            break;
        default :
            "No operator found!";
    }
}
// let reuslt = 
// console.log(operate(1, 5, "+"));
// console.log(reuslt);