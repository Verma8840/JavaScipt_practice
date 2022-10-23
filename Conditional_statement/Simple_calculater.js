// program for a simple calculator
let result;

// take the operator input
const operator = '+';
//const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = 25;
const number2 = 20;

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}

//parseFloat(prompt('Enter first number: '));