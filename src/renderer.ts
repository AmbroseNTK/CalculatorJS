import $ = require('jquery');
import 'mousetrap';

var input = "0";
var result = 0;
var resultStr = "Result = 0";
var operatorChar = "";

setResult();
setInput();
setEvent();

function setEvent() {
    $('#btClear').on('click', () => {
        clear();
    });
    $('#bt7').on('click', () => {
        addToInput('7');
    });
    $('#bt8').on('click', () => {
        addToInput('8');
    });
    $('#bt9').on('click', () => {
        addToInput('9');
    });
    $('#bt4').on('click', () => {
        addToInput('4');
    });
    $('#bt5').on('click', () => {
        addToInput('5');
    });
    $('#bt6').on('click', () => {
        addToInput('6');
    });
    $('#bt1').on('click', () => {
        addToInput('1');
    });
    $('#bt2').on('click', () => {
        addToInput('2');
    });
    $('#bt3').on('click', () => {
        addToInput('3');
    });
    $('#bt0').on('click', () => {
        addToInput('0');
    });
    $('#btPoint').on('click', () => {
        addToInput('.');
    });
    $('#btDel').on('click', () => {
        backspace();
    });
    $('#btPlus').on('click',()=>{
        setOperator('+');
    });
    $('#btMinus').on('click',()=>{
        setOperator('-');
    });
    $('#btMulti').on('click',()=>{
        setOperator('*');
    });
    $('#btDiv').on('click',()=>{
        setOperator('/');
    });
    $('#btEqual').on('click',()=>{
        calc(operatorChar);
        setResult();
        input = result.toString();
        operatorChar="";
        setInput();
    });

    Mousetrap.bind('0', () => {
        addToInput('0');
    });
    Mousetrap.bind('1', () => {
        addToInput('1');
    });
    Mousetrap.bind('2', () => {
        addToInput('2');
    });
    Mousetrap.bind('3', () => {
        addToInput('3');
    });
    Mousetrap.bind('4', () => {
        addToInput('4');
    });
    Mousetrap.bind('5', () => {
        addToInput('5');
    });
    Mousetrap.bind('6', () => {
        addToInput('6');
    });
    Mousetrap.bind('7', () => {
        addToInput('7');
    });
    Mousetrap.bind('8', () => {
        addToInput('8');
    });
    Mousetrap.bind('9', () => {
        addToInput('9');
    });
    Mousetrap.bind('.', () => {
        addToInput('.');
    });
    Mousetrap.bind('backspace', () => {
        backspace();
    });
    Mousetrap.bind('del', () => {
        clear();
    });
    Mousetrap.bind('enter', () => {
        calc(operatorChar);
        setResult();
        input = result.toString();
        operatorChar="";
        setInput();
    });
    Mousetrap.bind('+',()=>{
        setOperator('+');
    });
    Mousetrap.bind('-',()=>{
        setOperator('-');
    });
    Mousetrap.bind('*',()=>{
        setOperator('*');
    });
    Mousetrap.bind('/',()=>{
        setOperator('/');
    });
}

function clear() {
    result = 0;
    input = "0";
    operatorChar="";
    setResult();
    setInput();
}

function backspace() {
    input = input.substring(0, input.length - 1);
    if (input == "") {
        input = '0';
    }
    setInput();
}

function setResult() {
    resultStr = "Result = " + result;
    $('#lbResult').text(resultStr);
}

function setInput() {
    $('#lbDigits').text(input);
}

function addToInput(digit: string) {
    if (input == '0') {
        input = '';
    }
    if (digit != '.' || input.indexOf('.') == -1) {
        input += digit;
    }
    setInput();
}

function setOperator(oper: string) {
    try {
        if (operatorChar != "") {
            calc(operatorChar);
        }
        else {
            result = parseFloat(input);
        }

        operatorChar = oper;

        setResult();
        $('#lbResult').text(resultStr + ' ' + operatorChar);
        input = '0';
        setInput();
    }
    catch{

    }
}
function calc(oper: string) {
    switch (oper) {
        case '+':
            result += parseFloat(input);
            break;
        case '-':
            result -= parseFloat(input);
            break;
        case '*':
            result *= parseFloat(input);
            break;
        case '/':
            result /= parseFloat(input);
            break;
        default:
            result = parseFloat(input);
    }
}
