const screenEcuations = document.getElementById('ecuations');
const screenResult = document.getElementById('result');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const btnPoint = document.getElementById('btnPoint');
const btnClear = document.getElementById('btnClear');
const btnClear2 = document.getElementById('btnClear2');
const btnSquareRoot = document.getElementById('btnSquareRoot');
const btnDivision = document.getElementById('btnDivision');
const btnMultiplication = document.getElementById('btnMultiplication');
const btnRest = document.getElementById('btnRest');
const btnSum = document.getElementById('btnSum');
const btnResult = document.getElementById('btnResult');

let onScreenNumber;
let newNumber;
let lastNumber;
let sign;
let result;
let lastEcuation

btn1.addEventListener('click', () => Evaluate('1'));
btn2.addEventListener('click', () => Evaluate('2'));
btn3.addEventListener('click', () => Evaluate('3'));
btn4.addEventListener('click', () => Evaluate('4'));
btn5.addEventListener('click', () => Evaluate('5'));
btn6.addEventListener('click', () => Evaluate('6'));
btn7.addEventListener('click', () => Evaluate('7'));
btn8.addEventListener('click', () => Evaluate('8'));
btn9.addEventListener('click', () => Evaluate('9'));
btn0.addEventListener('click', () => Evaluate('0'));

btnPoint.addEventListener('click', () => EvaluateDecimalPoints('.'))

btnClear.addEventListener('click', () => Clear())
btnClear2.addEventListener('click', () => ClearAll())
btnSum.addEventListener('click', () => Operation('+'))
btnRest.addEventListener('click', () => Operation('-'))
btnMultiplication.addEventListener('click', () => Operation('×'))
btnDivision.addEventListener('click', () => Operation('÷'))
btnSquareRoot.addEventListener('click', () => Operation('√'))
btnResult.addEventListener('click', () => ProcessResult())

function EvaluateDecimalPoints(punto){
    if (!onScreenNumber.includes('.')) {
        Evaluate(punto)
    }
}



function Evaluate(num){
    
    if (onScreenNumber === undefined || onScreenNumber == 0 ) {
        onScreenNumber = num
    } else {
        onScreenNumber += num;
    }

    if (onScreenNumber.length <= 10) {
        screenResult.innerHTML = onScreenNumber
    } else {
        alert('Calculator only works with 10 digits for now, sorry for the inconvenience')
    }
};

function Clear(){
    onScreenNumber = undefined
    screenResult.innerHTML = '0'
};
function ClearAll(){
    onScreenNumber = undefined;
    newNumber = 0;
    lastNumber = 0;
    sign = '';
    result = 0;
    screenEcuations.innerHTML = '0'
    screenResult.innerHTML = '0'
}
function Operation(operation){
    lastNumber = parseFloat(onScreenNumber)
    onScreenNumber = undefined
    sign = operation

        if (operation === '√') {
            result = Math.sqrt(lastNumber)
            screenResult.innerHTML = result
            screenEcuations.innerHTML = sign + ' ' + 
        lastNumber}
};
function ProcessResult(){
    newNumber = parseFloat(onScreenNumber)
    if(sign == '+'){
        result = lastNumber + newNumber
    }else if(sign == '-'){
        result = lastNumber - newNumber
    }else if(sign == '×'){
        result = lastNumber * newNumber
    }else if(sign == '÷'){
        result = lastNumber / newNumber
    }
    lastEcuation = lastNumber + ' ' + sign + ' ' + newNumber

    let resultString = '' + result
    if (resultString.length > 10){
        result = parseFloat(resultString.slice(0,10))
        alert('The result of the last operaton is too long to be complete in the calculator, the result is ' + resultString)
    }
    
    screenResult.innerHTML = result
    screenEcuations.innerHTML = lastEcuation
    onScreenNumber = result
};